//  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
// const double = a => a * 2;
// const double = a, b => a * 2;
const double = (a) => a * 2;

// Returning an object
// Parentheses are required if returning an object
const createObj = () => ({
  name: "Jay",
});

const numbers = [1, 2, 3, 4, 5];

// normal callback
numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(`add(1,2) is ${add(1, 2)}`);
console.log(`subtract(10, 5) is ${subtract(10, 5)}`);
console.log(`double(10) is ${double(10)}`);
console.log(`createObj() is ${createObj()}`);
