const getUsers = async () => {
  try {
    const response = await fetch("https://httpstat.us/500");

    if (!response.ok) {
      throw new Error("Request Failed");
    }

    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();
