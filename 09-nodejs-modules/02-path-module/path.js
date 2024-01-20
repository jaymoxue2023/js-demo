const path = require("path");

const myFilePath = "subfolder/another-folder/index.js";

// basename()
const base1 = path.basename(myFilePath);
console.log("🚀 ~ base1:", base1);
const base2 = path.basename(myFilePath, ".js");
console.log("🚀 ~ base2:", base2);

// extname()
const ext = path.extname(myFilePath);
console.log("🚀 ~ ext:", ext);

// dirname()
const dir = path.dirname(myFilePath);
console.log("🚀 ~ dir:", dir);

// join() - relative path
const myPath = path.join("subfolder", "another-folder", "index.js");
console.log("🚀 ~ myPath:", myPath);

// resolve() - absolute path
const myPath2 = path.resolve("subfolder", "another-folder", "index.js");
console.log("🚀 ~ myPath2:", myPath2);

// __dirname - absolute path
console.log("🚀 ~ __dirname:", __dirname);

// __filename - absolute path
console.log("🚀 ~ __filename:", __filename);
