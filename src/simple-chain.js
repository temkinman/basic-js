const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !position ||
      isNaN(parseInt(position)) ||
      position >= this.chain.length ||
      position < 0
    ) {
      this.chain = [];
      throw new Error("Position isn't valid");
    }
    this.chain = this.chain.filter((el, ind) => ind + 1 !== position);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];
    return `${result}`;
  },
};

module.exports = chainMaker;