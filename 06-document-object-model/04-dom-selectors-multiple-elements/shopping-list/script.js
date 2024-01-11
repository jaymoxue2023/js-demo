// querySelectorAll()
// Returns a NodeList

const listItems = document.querySelectorAll(".item");
console.log("🚀 ~ file: script.js:5 ~ listItems:", listItems);

// Access elements by index
console.log(listItems[1].innerText);

// cannot set style on a NodeList
// listItems.style.color = "red";

// Setting a color for specific element
listItems[1].style.color = "red";

// We can use forEach() on a NodeList
listItems.forEach((item, index) => {
  item.style.color = "blue";

  // if (index === 1) {
  //   item.remove();
  // }

  if (index === 0) {
    // list item has text also the button, need to include all of them
    item.innerHTML = `Bananas
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  }
});

// Returns an HTMLCollection
const listItems2 = document.getElementsByClassName("item");
console.log("🚀 ~ file: script.js:36 ~ listItems2:", listItems2);

console.log(listItems2[2].innerText);

// cannot use high order function on HTMLCollection
// listItems2.forEach((item) => {
//   console.log(item.innerText);
// });

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});
