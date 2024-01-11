let output;

// Get child elements from a parent
const parent = document.querySelector(".parent");
console.log("🚀 ~ file: script.js:6 ~ parent:", parent);

/*
HTMLCollection is a type of object returned by methods like document.getElementsByClassName() or element.children. It is a live collection, meaning it automatically updates when the document changes. It only contains HTML elements.

NodeList is a type of object returned by methods like document.querySelectorAll(), document.childNodes, or element.childNodes. A NodeList can contain any type of node (e.g., Element nodes, Text nodes, Comment nodes), not just HTML elements. The NodeList returned by querySelectorAll() is static and does not update when the document changes. However, the NodeList returned by childNodes is live and does update.

In general, if you're selecting elements by their tag name or class name, you'll get an HTMLCollection. If you're using a more complex CSS selector or getting child nodes, you'll get a NodeList.
*/
output = parent.children;
console.log(output);

output = parent.children[1].innerText;

output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

parent.firstElementChild.innerText = "Child One";
parent.lastElementChild.innerText = "Child Three";

// Get parent elements from a child
const child = document.querySelector(".child");

output = child.parentElement;
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

// Get sibling elements
const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "green";
secondItem.previousElementSibling.style.color = "orange";
console.log(output);
