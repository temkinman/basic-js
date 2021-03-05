const CustomError = require("../extensions/custom-error");

module.exports = function countCats(pets) {
  const cats = pets
    .reduce((item, acc) => [...acc, ...item], [])
    .filter((item) => item === "^^");
  return cats.length;
};
