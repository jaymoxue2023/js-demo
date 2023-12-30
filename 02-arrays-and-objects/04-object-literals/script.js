let x;

// Creating an object
const person = {
  name: "Jay Chou",
  age: 18,
  address: {
    street: "550 Flinder St",
    city: "Melbourne",
    state: "VIC",
  },
  hobbies: ["music", "sports"],
};

// Accessing object properties
x = person.name; // Dot notation
x = person["age"]; // Bracket notation
x = person.address.state;
x = person.hobbies[0];

// Updating properties
person.age = 20;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

console.log(x);
