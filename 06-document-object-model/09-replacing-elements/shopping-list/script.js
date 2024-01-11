// replaceWith() Method
function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");

  /*
  textContent returns the text content of all elements, including hidden elements and elements with CSS display: none property. 

  On the other hand, innerText returns only the visible text content, excluding hidden elements.
  */
  li.textContent = "Replaced First";
  // li.innerText = "Replaced First";

  firstItem.replaceWith(li);
}

// OuterHTML Property
function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  /*
  innerHTML: This property gets or sets the HTML content (the "inner HTML") of an element. It includes only the content within the opening and closing tags of the element, not the tags themselves.

  outerHTML: This property gets or sets the HTML content including the element itself. It includes the content and the opening and closing tags of the element. If you set outerHTML, it will replace the entire element with the new HTML content.
  */

  secondItem.outerHTML = "<li>Replaced Second</li>";
}

// Replace All Items
function replaceAllItems() {
  const lis = document.querySelectorAll("li");

  // lis.forEach((item, index) => {
  //   // item.outerHTML = '<li>Replace All</li>';
  //   if (index === 1) {
  //     item.innerHTML = 'Second Item';
  //   } else {
  //     item.innerHTML = 'Replace All';
  //   }
  // });

  // () is required after ==> otherwise JavaScript would interpret the ?: symbols as a syntax error.
  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? "<li>Second Item</li>" : "<li>Item</li>")
  );
}

// another example to change heading
function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping List";
  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();
