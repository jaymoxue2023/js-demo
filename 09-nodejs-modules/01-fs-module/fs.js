const fs = require("fs");
const fsUsingPromise = require("fs/promises");

// Write to a file //

// Sync version
fs.writeFileSync("file1.txt", "fs sync");
console.log("File1 created");

// Promise version
fsUsingPromise
  .writeFile("file2.txt", "fs async with promise")
  .then(() => console.log("File2 created"))
  .catch((err) => console.log(err));

// Async/Await
async function createFile(filename, content) {
  try {
    await fsUsingPromise.writeFile(filename, content);
    console.log("File3 created");
  } catch (error) {
    console.log(error);
  }
}

// Read From a File //
async function readFile(filename) {
  try {
    const data = await fsUsingPromise.readFile(filename, "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Delete a File //
async function deleteFile(filename) {
  try {
    await fsUsingPromise.unlink(filename);
    console.log(`File ${filename} deleted`);
  } catch (error) {
    console.log(error);
  }
}

// Rename a File //
async function renameFile(oldName, newName) {
  try {
    await fsUsingPromise.rename(oldName, newName);
    console.log(`File ${oldName} renamed to ${newName}`);
  } catch (error) {
    console.log(error);
  }
}

// Create a folder //
async function createFolder(folderName) {
  try {
    await fsUsingPromise.mkdir(folderName);
    console.log(`Folder ${folderName} created`);
  } catch (error) {
    console.log(error);
  }
}

createFile("file3.txt", "fs async with async/await");
// createFolder("folder1");
// renameFile("file1.txt", "file.txt");
// deleteFile("file.txt");
readFile("file1.txt");
readFile("file2.txt");
readFile("file3.txt");

// https://nodejs.org/api/fs.html
