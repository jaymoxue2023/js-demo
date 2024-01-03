const d = new Date("2024-02-04T18:00:00");
const month = d.getMonth();
const hour = d.getHours();

console.log(`The date is ${d}`);
console.log(`The month is ${month}`);
console.log(`The hour is ${hour}`);

// Immediate value evaluation
switch (month + 1) {
  case 1:
    console.log("It is January");
    break;
  case 2:
    console.log("It is February");
    break;
  case 3:
    console.log("It is March");
    break;
  default:
    console.log("It is not Jan, Feb or March");
}

// Range evaluation
switch (true) {
  case hour < 12:
    console.log("Good Morning");
    break;
  case hour < 18:
    console.log("Good Afternoon");
    break;
  default:
    console.log("Good Night");
}
