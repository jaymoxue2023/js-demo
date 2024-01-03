function registerUser(user) {
  return user + "is registered";
}

console.log(registerUser("Jay"));
console.log(registerUser());

// Before ES6
function registerUser(user) {
  if (!user) {
    user = "Default";
  }
}

console.log(registerUser());

// After ES6, Default Params
function registerUser(user = "Default") {
  return user + " is registered";
}

console.log(registerUser());

// Rest Params
// function sum(...numbers) {
//   return numbers;
// }

// console.log("all numbers:", sum(1, 2, 3));

// pass unlimited parameters to a function
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "Jay",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "Jerry",
  })
);

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
