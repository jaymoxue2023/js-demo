// option 1: without event listeners
// function onClick() {
//   alert("Clear Items");
// }

// option 2: onclick Event Listener
const clearBtn = document.querySelector("#clear");
// clearBtn.onclick = function () {
//   alert("Clear Items");
// };

// clearBtn.onclick = function () {
//   console.log("Clear Items");
// };

function onClear() {
  console.log("Clear Items");

  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");

  // option 1: remove() Method
  // itemList.innerHTML = '';

  // option 2: removeChild() Method
  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// option 3: addEventListener()
clearBtn.addEventListener("click", () => alert("Clear Items"));

// Use named function
clearBtn.addEventListener("click", onClear);

// removeEventListener()
// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// Fire off event from JS
setTimeout(() => clearBtn.click(), 5000);
