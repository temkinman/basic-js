const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, optionsInput) {
  let options = {
    separator: "+",
    additionSeparator: "|",
    addition: "",
  };

  if (typeof str !== "string") {
    str = String(str);
  }

  if (typeof options.addition !== "string") {
    options.addition = String(options.addition);
  }

  let result = "";
  options = { ...options, ...optionsInput };

  if (!options.repeatTimes && !options.additionRepeatTimes) {
    return str + options.addition;
  }

  if (!options.repeatTimes) {
    result += str + options.addition;
    return addSeparatorAndAddition(result, options);
  } else if (!options.additionRepeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      result += str + options.addition;

      if (i !== options.repeatTimes - 1) {
        result += options.separator;
      }
    }
    return result;
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      result += str + options.addition;
      result = addSeparatorAndAddition(result, options);

      if (i !== options.repeatTimes - 1) {
        result += options.separator;
      }
    }
    return result;
  }

  function addSeparatorAndAddition(result, options) {
    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
      result += options.additionSeparator + options.addition;
    }
    return result;
  }
};
