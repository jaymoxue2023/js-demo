function capitaliseWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function addDollarSign(amount) {
  return `$${amount}`;
}

module.exports = {
  capitaliseWords,
  addDollarSign,
};
