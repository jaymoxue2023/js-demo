const x = 100;

// An If statement is a block
if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined

// Using var
if (true) {
  const a = 500;
  let b = 600;
  // var is not blocked scoped, which is not recommended to use
  var c = 700;
}

console.log(c);

for (var i = 0; i <= 10; i++) {
  console.log("inner i:", i);
}

console.log("outer i:", i);

// var is function scoped
function run() {
  var d = 100;
  console.log(d);
}

run();

console.log(d);

const foo = 1;
var bar = 2; // Put on the window object
