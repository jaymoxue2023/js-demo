// document.querySelector("h1").textContent = "Hello World";

// window.addEventListener("load", () => {
//   console.log("Window Loaded");
//   document.querySelector("h1").textContent = "Hello World";
// });

window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).textContent = `Resized to ${window.innerWidth} x ${window.innerHeight} pixels`;
});

window.addEventListener("scroll", () => {
  console.log(`Scrolled ${window.scrollX} x ${window.scrollY} pixels`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

window.addEventListener("focus", () => {
  console.log("Window Focused");
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "blue";
  });
});

window.addEventListener("blur", () => {
  console.log("Window Blurred");
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "red";
  });
});
