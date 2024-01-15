const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John", age: 20 });
  }, 1000);
});

// promise.then((data) => {
//   console.log(data);
// });

async function getPromise() {
  const response = await promise;
  console.log(response);
}

getPromise();

function getUsers1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// getUsers1();

async function getUsers2() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

getUsers2();

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  throw new Error("Something went wrong");
  console.log(data);
};

getPosts().catch((error) => console.log(error));
