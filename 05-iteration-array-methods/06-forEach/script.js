const socials = ["Facebook", "Instagram", "Twitter"];

socials.forEach((social) => {
  console.log(social);
});

socials.forEach(function (social) {
  console.log(social);
});

socials.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

function logSocials(item, index, arr) {
  console.log(item, index, arr);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: "Facebook", link: "https://facebook.com" },
  { name: "Instagram", link: "https://instagram.com" },
  { name: "Twitter", link: "https://twitter.com" },
];

socialObjs.forEach((socialObj) => console.log(socialObj.name));
