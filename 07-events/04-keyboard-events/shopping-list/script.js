const itemInput = document.getElementById("item-input");

const onKeyPress = (e) => {
  console.log("key pressed");
};

const onKeyUp = (e) => {
  console.log("key up");
};

/*
e.key: The e.key property represents the value of the physical key that was pressed or released. It provides information about the actual key that was pressed, regardless of the keyboard layout or language settings. For example, if you press the "A" key on a QWERTY keyboard, e.key will be set to "a". Similarly, if you press the "1" key, e.key will be set to "1". It is useful for detecting specific keys or performing actions based on the pressed key.

e.code: The e.code property represents the key value in a standardized format called the "DOM key value". It provides a consistent value for each key across different keyboard layouts and languages. For example, the e.code for the "A" key is "KeyA", and the e.code for the "1" key is "Digit1". It is useful for detecting keys in a language-independent manner.
*/

const onKeyDown = (e) => {
  console.log("key down, key", e.key);
  console.log("key down, code", e.code);

  if (e.key === "5") {
    console.log("5 entered");
  }

  if (e.code === "Digit9") {
    console.log("9 pressed");
  }
};

itemInput.addEventListener("keypress", onKeyPress);
itemInput.addEventListener("keyup", onKeyUp);
itemInput.addEventListener("keydown", onKeyDown);
