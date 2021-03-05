const CustomError = require("../extensions/custom-error");
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if (disksNumber <= 0 || turnsSpeed <= 0) {
    return;
  }
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor((3600 * turns) / turnsSpeed);
  return { turns, seconds };
}
