async function getUser() {
  const response = await fetch("https://api.github.com/users/jaymoxue2023");
  const data = await response.json();
  console.log("🚀 ~ getUser ~ data:", data);
}

getUser();
