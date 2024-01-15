// fetch("https://httpstat.us/200")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   });

// fetch("https://httpstat.us/404")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((error) => console.log(error));

// fetch("https://httpstat12312.us")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((error) => console.log(error));

fetch("https://httpstat.us/404")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request Failed");
    }
    return response;
  })
  .then(() => {
    console.log("success");
  })
  .catch((error) => console.log(error));

fetch("https://httpstat.us/200")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("404 Not Found");
    } else if (response.status === 500) {
      throw new Error("500 Internal Server Error");
    } else if (response.status !== 200) {
      throw new Error("Request Failed");
    }
    return response;
  })
  .then(() => {
    console.log("200 success");
  })
  .catch((error) => console.log(error));
