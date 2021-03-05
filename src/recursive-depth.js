const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!arr || !Array.isArray(arr)) {
      return false;
    }

    let maxdepth = 0;
    arr.map((el) => {
      let dpth = this.calculateDepth(el);
      if (dpth > maxdepth) {
        maxdepth = dpth;
      }
    });
    return maxdepth + 1;
  }
};