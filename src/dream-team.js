const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0 || !members) {
    return false;
  }
  const result = members
    .map((el) => {
      let arr = [];
      if (typeof el === "string") {
        arr.push(el.trim().charAt(0).toUpperCase());
        return arr;
      }
    })
    .sort()
    .join("");
  return result;
};
