const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
  console.log("input event");
  heading.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? "Checked" : "Unchecked";
}

function onFocus() {
  console.log("focus event");
  heading.style.color = "red";
}

function onBlur() {
  console.log("blur event");
  heading.style.color = "green";
}

itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("change", onInput);
checkbox.addEventListener("input", onChecked);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
