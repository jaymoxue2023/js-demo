/*
  In JavaScript, the executor function (the function you pass to the new Promise constructor) runs automatically when the Promise is created. This is a feature of Promises in JavaScript, and it's different from how regular functions work.
*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log("Promise consumed...");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 complete");
    resolve({ name: "Jay", age: 18 });
  }, 1000);
}).then((user) => {
  console.log(user);
});

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Jay", age: 18 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

getUser
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

console.log("Hello from global scope");
