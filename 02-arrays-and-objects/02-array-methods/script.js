let x;

const arr = [2, 4, 8, 16, 32];

// push() - Push a value on to the end of the array
arr.push(64);
console.log(`arr.push(64): ${arr}`);

// pop() - Take the last value off
arr.pop();
console.log(`arr.pop(): ${arr}`);

// unshift() - Add a value to the beginning of the array
arr.unshift(1);
console.log(`arr.unshift(1): ${arr}`);

// shift() - Remove first value
arr.shift();
console.log(`arr.shift(): ${arr}`);

// reverse() - Reverse an array
// arr.reverse();
// console.log(`arr.reverse(): ${arr}`);

// includes() - Check to see if something is in the array
x = arr.includes(33);
console.log(`arr.includes(33): ${x}`);

// indexOf() - Return the index of the first match
x = arr.indexOf(16);
console.log(`arr.indexOf(16): ${x}`);

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
x = arr.slice(1, 4);
console.log(`arr after slice: ${arr}`);
console.log(`arr.slice(1, 4): ${x}`);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
x = arr.splice(1, 4);
console.log(`arr after splice: ${arr}`);
console.log(`arr.splice(1, 4): ${x}`);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
x = arr.splice(4, 1);

// Chaining methods - Some methods can be chained depending on the return value.
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);
