let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "raspberry"];

// concat() - Concatenate arrays
x = fruits.concat(berries);

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];

// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// isArray() - Check is is an array
x = Array.isArray(fruits);

// from() - Create an array from an array like value
x = Array.from("12345");

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
