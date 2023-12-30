let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
console.log(`numbers: ${numbers}`);
const mixed = [12, "Hello", true, null];
console.log(`mixed: ${mixed}`);

// Array Constructor
const fruits = new Array("apple", "grape", "orange");
console.log(`fruits: ${fruits}`);

// Get value by index
x = numbers[0];
console.log(`numbers[0]: ${x}`);

x = `My favorite fruit is an ${fruits[2]}`;
console.log(`My favorite fruit is an ${fruits[2]}`);

// Get length
x = numbers.length;
console.log(`numbers.length: ${x}`);

// Change value
fruits[2] = "pear";
console.log(`fruits: ${fruits}`);

// Using the length as the index will always add on to the end
fruits[fruits.length] = "blueberry";
console.log(`fruits: ${fruits}`);

x = fruits;

console.log(x);
