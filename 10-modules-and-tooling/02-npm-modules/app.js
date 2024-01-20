const axios = require("axios");

async function getPostsUsingAxios() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/3"
  );
  const data = response.data;
  console.log("🚀 ~ getPostsUsingAxios ~ data:", data);
}

async function getPostsUsingFetch() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data = await response.json();
  console.log("🚀 ~ getPostsUsingFetch ~ data:", data);
}

getPostsUsingAxios();
getPostsUsingFetch();
