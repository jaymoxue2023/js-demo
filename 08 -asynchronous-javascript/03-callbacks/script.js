function toggle(e) {
  e.target.classList.toggle("danger");
}

document.querySelector("button").addEventListener("click", toggle);

const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post two",
  },
];

/* 
Synchronous callbacks
These are invoked immediately. They are typically used in array methods like Array.prototype.map, Array.prototype.filter, Array.prototype.reduce, etc.

Asynchronous callbacks: 
These are not invoked immediately. They are typically used in functions that perform asynchronous operations, like setTimeout, setInterval, AJAX requests, reading files in Node.js, etc.
*/

function getPosts() {
  // mimic a server response
  setTimeout(() => {
    // callback in forEach is synchronous
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// createPost({ title: "Post Three", body: "This is post three" });

// getPosts();

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);
