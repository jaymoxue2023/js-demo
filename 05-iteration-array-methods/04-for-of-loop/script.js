const items = ["item1", "item2", "item3", "item4", "item5"];

for (const item of items) {
  console.log(item);
}

const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "Tim", age: 10 },
];

for (const user of users) {
  console.log(user.name);
}

const str = "Hello";

for (const char of str) {
  console.log(char);
}

const map = new Map();
map.set("a", 1);
map.set("b", 2);

for (const [key, value] of map) {
  console.log(`${key}, ${value}`);
}
