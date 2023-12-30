const post = {
  id: 1,
  title: "Post 1",
  body: "This is post 1",
};

// Convert to JSON string
const str = JSON.stringify(post);
console.log(str);

// Parse JSON
const obj = JSON.parse(str);
console.log(obj);

// JSON & arrays
const posts = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
];

const str2 = JSON.stringify(posts);
console.log(str2);
