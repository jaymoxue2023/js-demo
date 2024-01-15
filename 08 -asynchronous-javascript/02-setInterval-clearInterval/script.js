// const intervalId = setInterval(myCallback, 1000);

// function myCallback() {
//   console.log(new Date());
// }

let intervalId;

function startChange() {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
}

function changeColor() {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}

function stopChange() {
  clearInterval(intervalId);
}

document.getElementById("start").addEventListener("click", startChange);
document.getElementById("stop").addEventListener("click", stopChange);
