fetch("./movies.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

fetch("./test.txt")
  .then((response) => {
    console.log(response);
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });

fetch("https://api.github.com/users/jaymoxue2023")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return (document.querySelector("h1").textContent = data.login);
  });
