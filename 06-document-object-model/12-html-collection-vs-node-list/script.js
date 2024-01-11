// Selecting elements to create an HTMLCollection
const childrenByClass = document.getElementsByClassName("child");

// Selecting elements to create a NodeList
const childrenByQuery = document.querySelectorAll(".child");

// Log initial contents
console.log("Initial HTMLCollection:", childrenByClass);
console.log("Initial NodeList:", childrenByQuery);

// Add a new element with class 'child'
const newChild = document.createElement("div");
newChild.className = "child";
newChild.textContent = "New Child";
document.querySelector(".parent").appendChild(newChild);

// Log contents after modification
console.log("Updated HTMLCollection:", childrenByClass);
console.log("Updated NodeList:", childrenByQuery);

// Selecting all child nodes (including text and comment nodes) of the parent div to create a NodeList
const allChildNodes = document.querySelector(".parent").childNodes;

// Selecting all element nodes with class 'child' of the parent div to create an HTMLCollection
const childElements = document.getElementsByClassName("child");

// Log the contents
console.log("NodeList (includes text and comment nodes):", allChildNodes);
console.log("HTMLCollection (only element nodes):", childElements);
