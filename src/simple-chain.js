const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  string: '',
  reset: '',

  getLength() {
    return this.string.length;
  },
  addLink(value) { // цепочность возможна, если каждый метод возвращает сам объект
    this.string +=`( ${value} )~~`;
    return this;
  },
  removeLink(position) {
    this.string = this.string.slice(0, -2).split(`~~`); // удалять хвост
    if (position <= 0 || position > this.string.length || typeof(position) !== 'number') {
      this.string = '';
      throw new Error('You can\'t remove incorrect link!');
    }
    this.string = this.string.filter((item, idx, array) => {
      if (position - 1 !== idx) {
        return item;
      }
    }).join('~~') + '~~';
    return this;
  },
  reverseChain() {
    if (this.string) {
      this.string = this.string.slice(0, -2); // удалять хвост
      this.string = this.string.split('~~').reverse().join('~~') + '~~';
    }
    return this;
  },
  finishChain() {
    this.reset = this.string.slice(0, -2);
    this.string = '';
    return this.reset;
  }
};

module.exports = {
  chainMaker
};

// npm run test ./test/simple-chain.test.js