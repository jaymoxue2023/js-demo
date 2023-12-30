let x;
// Create object using the object literal notation
// const todo = {};
// Create object using the object constructor
const todo = new Object();

todo.id = 1;
todo.name = "Buy milk";
todo.completed = false;

x = todo;

// Object Nesting
const person = {
  address: {
    coords: {
      lat: 37.8166,
      lng: 144.9631,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator ES6
const obj3 = { ...obj1, ...obj2 };
// Same as using ... before ES6
const obj4 = Object.assign({}, obj1, obj2);

// Array of objects
const todos = [
  { id: 1, name: "Buy milk" },
  { id: 2, name: "Pickup kids from school" },
  { id: 3, name: "Take out trash" },
];

// Get array of object keys
x = Object.keys(todo);

// Get length of an object
x = Object.keys(todo).length;

// Get array of object values
x = Object.values(todo);

// Get array of object key/value pairs
x = Object.entries(todo);

// Check if object has a property
x = todo.hasOwnProperty("age");

console.log(x);
