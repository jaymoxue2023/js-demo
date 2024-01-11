const form = document.getElementById("item-form");

function onSubmit(e) {
  e.preventDefault();
  console.log("Form Submitted");

  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;

  if (item === "" || priority === "0") {
    alert("Please fill in all values!");
    return;
  }

  console.log(`Item: ${item}, Priority: ${priority}`);
}

function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);

  // get individual item by name
  const item = formData.get("item");
  const priority = formData.get("priority");
  console.log(`Item: ${item}, Priority: ${priority}`);
}

form.addEventListener("submit", onSubmit2);
