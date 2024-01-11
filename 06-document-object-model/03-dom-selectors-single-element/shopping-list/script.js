// document.getElementById()
console.log(document.getElementById("app-title"));

// Get attributes
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

// Set attributes
document.getElementById("app-title").title = "Shopping List";
document.getElementById("app-title").setAttribute("class", "title");

const title = document.getElementById("app-title");

/*
textContent returns the text content of an element, including all nested elements, without interpreting any HTML tags. It treats everything as plain text.

innerText returns the visible text content of an element, excluding any hidden or styled elements. It interprets and renders the HTML tags, but it does not include the content of <script> or <style> elements.

innerHTML returns the HTML content of an element, including all nested elements and their HTML tags. It interprets and renders the HTML tags, allowing you to modify the structure and content of the element.
*/

// Get/change content
console.log(title.textContent);
title.textContent = "Hello World";
// similar to above but more commonly used
title.innerText = "Hello Again";
title.innerHTML = "<strong>Shopping List</strong>";

// Change styles
title.style.color = "red";

// if two words, in css, it's background-color, but in js, it's backgroundColor
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";
console.log("🚀 ~ file: script.js:36 ~ title:", title);

// document.querySelector()

// Use any CSS selector
// by element selector
console.log(document.querySelector("h1"));
// by id selector
console.log(document.querySelector("#app-title"));
// by class selector
console.log(document.querySelector(".container"));
// by attribute selector
console.log(document.querySelector('input[type="text"]'));
// pseudo selector
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

// Use these methods on other elements
const list = document.querySelector("ul");
console.log(list);
// no need to be the document, can be any element
const firstItem = list.querySelector("li");
firstItem.style.color = "blue";
