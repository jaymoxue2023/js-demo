const url = require("url");
const querystring = require("querystring");

const myUrl = new URL("https://example.com/listing?id=1000&premium=true");
console.log("🚀 ~ myUrl:", myUrl);

// url.format()
const myUrl2 = url.format({
  protocol: "https",
  host: "www.example.com",
  pathname: "listing",
  query: {
    id: 1000,
    premium: true,
  },
});
console.log("🚀 ~ myUrl2:", myUrl2);

// querystring.parse()
const myQs = "year=2024&month=january&day=20";

const q = querystring.parse(myQs);
console.log("🚀 ~ q:", q);
console.log("🚀 ~ q.month:", q.month);

// querystring.stringify()
const myQs2 = querystring.stringify({
  year: 2023,
  month: "january",
  day: 20,
});
console.log("🚀 ~ myQs2:", myQs2);
