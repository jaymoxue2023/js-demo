const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Button was clicked");
});

div.addEventListener("click", (e) => {
  alert("Div was clicked");
});

form.addEventListener("click", (e) => {
  alert("Form was clicked");
});

// document.body.addEventListener("click", (e) => {
//   alert("Body was clicked");
// });
