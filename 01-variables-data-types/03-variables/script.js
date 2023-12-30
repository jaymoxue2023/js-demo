// Ways to declare a variable
// `var`, `let`, & `const`
var firstName = "Jay";
const lastName = "Chou";
let age = 18;
console.log(age);

// We can re-assign `let` variables.
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value
let score;
score = 99;
console.log(score);

// 'const' declarations must be initialized
// const x;
const x = 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: "Jay",
};
person.name = "Chou";
person.email = "jaychou@gmail.com";
console.log(person);

// Declare multiple values at once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;
