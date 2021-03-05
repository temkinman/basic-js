const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  N = 26;
  alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  decryptMethod = "DECRYPT";
  encryptMethod = "ENCRYPT";

  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Not enough parametrs");
    }
    return this.transformWord(message, key, this.encryptMethod);
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Not enough parametrs");
    }
    return this.transformWord(message, key, this.decryptMethod);
  }
  transformWord(message, key, method) {
    let result = [];
    const keys = key.split("");
    const words = message.split(" ");

    let j = 0;
    for (let word of words) {
      const letters = word.split("");
      let resultWord = "";

      for (let i = 0; i < letters.length; i++, j++) {
        if (j === keys.length) {
          j = 0;
        }
        const letter = letters[i].toUpperCase();
        const key = keys[j].toUpperCase();

        const indAlphLetter = this.alphabet.indexOf(letter);
        const indAlphKey = this.alphabet.indexOf(key);

        if (indAlphLetter > -1) {
          let ind = -1;

          if (method === this.encryptMethod) {
            ind = indAlphLetter + indAlphKey;
            ind = ind >= this.N ? ind - this.N : ind;
          }

          if (method === this.decryptMethod) {
            ind = indAlphLetter - indAlphKey;
            ind = ind < 0 ? ind + this.N : ind;
          }

          if (ind > -1) {
            resultWord += this.alphabet[ind];
          }
        } else {
          resultWord += letter.toUpperCase();
        }
      }
      result.push(resultWord);
      resultWord = "";
    }
    return this.mode
      ? result.join(" ").trim()
      : result.join(" ").split("").reverse().join("").trim();
  }
}

module.exports = VigenereCipheringMachine;
