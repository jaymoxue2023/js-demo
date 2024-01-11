const logo = document.querySelector("img");

/*
- `target` - The element that triggered the event
- `type` - The type of event that was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
*/
function onClick(e) {
  // Event properties
  console.log(e.target);
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.offsetX);
  console.log(e.offsetY);
}

function onDrag(e) {
  document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener("click", onClick);
logo.addEventListener("drag", onDrag);

// e.preventDefault() method prevents the default behavior
document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Link was clicked");
});
