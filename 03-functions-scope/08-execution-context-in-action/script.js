/*
Execution Context Phases

Memory Creation Phase：
1. Create the global object （browser = window, Node.js= global）
2. Create the "this' object and bind it to the global object
3. Setup memory heap for storing variables and function.references
4. Store functions and variables in global execution context and set to “undefined"

Execution Phase：
1. Execute code line by line
2. Create a new execution context for each function call
*/

const x = 100;
const y = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const getSum1 = function (n1, n2) {
  return n1 + n2;
};

const getSum2 = (n1, n2) => n1 + n2;

var getSum3 = function (n1, n2) {
  return n1 + n2;
};

var getSum4 = (n1, n2) => n1 + n2;

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);
