const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  // className - Gets a string of all classes
  console.log(
    "🚀 ~ file: script.js:8 ~ run ~ itemList.className:",
    itemList.className
  );
  // Changing the classes with className
  /* The line `text.className = "card dark";` is changing the value of the `className` property of the
  `text` element. It sets the class of the element to "card dark". This means that the element will
  have both the "card" class and the "dark" class applied to it. */
  // text.className = "card dark";

  // classList - Array of classes, which also has methods to add, remove, toggle and replace
  console.log(
    "🚀 ~ file: script.js:16 ~ run ~ itemList.classList:",
    itemList.classList
  );

  itemList.classList.forEach((c) => {
    console.log("🚀 ~ file: script.js:19 ~ run ~ c:", c);
  });
  // Add, remove, toggle, replace
  // text.classList.add("dark");
  // text.classList.remove("card");
  // text.classList.toggle("hidden");
  text.classList.toggle("dark");
  // text.classList.replace("card", "dark");

  itemList.style.lineHeight = "3rem";

  // items.forEach((item, index) => {
  //   item.style.color = 'red';

  //   if (index === 2) {
  //     item.style.color = 'blue';
  //   }
  // });
}

document.querySelector("button").onclick = run;
