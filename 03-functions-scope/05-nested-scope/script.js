function first() {
  const x = 100;

  function second() {
    const y = 200;
    // from child, can access variables in parent
    console.log(`nested function: x + y = ${x + y}`);
  }

  // from parent, cannot access variables in child
  // console.log(y);

  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
    console.log(`nested block: x + y = ${x + y}`);
  }

  console.log(`nested block: y = ${y}`);
}
