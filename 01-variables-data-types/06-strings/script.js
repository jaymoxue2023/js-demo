let x;

const name = "Jay";
const age = 18;

// Concatenation
x = "Hello, my name is " + name + " and I am " + age + " years old";

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// Creating a "string object" (JS does this automatically when using a property or method on a primitive string)
const s = new String("Hello World");

x = typeof s;
console.log("type of x is:", x);

x = s.length;
console.log("length of x is:", x);

// Access value by key
x = s[0];

// Change case
x = s.toUpperCase();
console.log("upper case of x is:", x);

x = s.toLowerCase();
console.log("lower case of x is:", x);

// charAt() - returns the character at the specified index
x = s.charAt(0);
console.log("first character of x is:", x);

// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf("d");
console.log(`position of character 'd' is:`, x);

// substring() - search a string for a specified value
x = s.substring(2, 7);
console.log(`substring(2,7) of x is:`, x);
x = s.substring(7);
console.log(`substring(7) of x is:`, x);

// slice() - extracts a part of a string and returns a new string
x = s.slice(2, 7);
console.log(`slice(2,7) of x is:`, x);
x = s.slice(-11, -6);
console.log(`slice(-11, -6) of x is:`, x);

// trim() - remove whitespace from beginning and end of string
x = "         Hello World";
console.log(`x before trim is:`, x);
x = x.trim();
console.log(`x after trim is:`, x);

// replace() - replace all instances of a string
x = s.replace("World", "Jay");
console.log(`replace World with Jay: `, x);

// includes() - returns true if the string is found
x = s.includes("Hell");
console.log(`is 'Hell' included in x:`, x);

// valueOf() - returns the primitive value of a variable
console.log("s is type of:", typeof s);
x = s.valueOf();
console.log("x is type of:", typeof x);

// split() - returns an array of strings
x = s.split(" ");
console.log(`s.split(" ")`, x);
x = s.split("");
console.log(`s.split("")`, x);
