// Function Declaration
function addDollarSign(value) {
  return `${value}`;
}

// When using declarations, you can invoke the function before the declaration. With expressions, you can not

// hoisting: move function declarations to the top of the scope
console.log(addDollarSign(100));

// Function Expression
// have semi colon after function expression
const addPlusSign = function (value) {
  return `+${value}`;
};

console.log(addPlusSign(200));
