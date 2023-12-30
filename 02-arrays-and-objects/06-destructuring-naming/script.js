// Setting object properties with the same name as a variable
const firstName = "Jay";
const lastName = "Chou";
const age = 18;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring object properties

const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "Jay",
  },
};

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;

console.log(todoId);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
