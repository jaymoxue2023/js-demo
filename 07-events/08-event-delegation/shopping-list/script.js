const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Event delegation is a technique in JavaScript that allows you to attach a single event listener to a parent element, instead of attaching individual event listeners to each child element. This approach is useful when you have a large number of child elements or dynamically added elements.

// Add an event listener on all items
// listItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });

// Add a single event listener on the parent (Event Delegation)
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

list.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});
