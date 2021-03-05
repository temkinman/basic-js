const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Error");

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        if (i + 1 < arr.length) {
          res.push("");
          i++;
        }
        break;
      case "--discard-prev":
        if (i > 0) {
          res.pop();
        }
        break;
      case "--double-next":
        if (i + 1 < arr.length ) {
          i++;
          res.push(arr[i]);
          res.push(arr[i]);
        }
        break;
      case "--double-prev":
        if (i > 0) {
          res.push(res[res.length - 1]);
        }
        break;
      default:
        res.push(arr[i]);
        break;
    }
  }

  return res.filter((el) => el.length !== 0);
};
