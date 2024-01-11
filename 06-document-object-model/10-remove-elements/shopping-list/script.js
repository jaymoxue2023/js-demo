// remove() Method
function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

// removeChild() Method
function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

function removeItem2(itemNumber) {
  const ul = document.querySelector("ul");
  // can access the nodeList using index
  const li = document.querySelectorAll("li")[itemNumber - 1];

  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll("li");
  li[itemNumber - 1].remove();
}

// removeClearButton();
// removeFirstItem();
// removeItem(1);
// removeItem2(1);
// removeItem3(1);
