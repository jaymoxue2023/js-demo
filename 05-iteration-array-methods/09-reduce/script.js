const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log("🚀 ~ file: script.js:6 ~ sum ~ sum:", sum);

console.log(sum);

const sum2 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum2);

const sum3 = () => {
  let acc = 0;
  for (const current of numbers) {
    acc += current;
  }
  return acc;
};

console.log(sum3());

const cart = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

const total = cart.reduce((acc, current) => acc + current.price, 0);

console.log(total);
