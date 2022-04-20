const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  restArr = [];
  count = 0;
  stop = false;

  calculateDepth(arr) {
    if (this.stop) this.count = 0; // обнуление счетчика после каждого вызова класса
    if (this.stop) this.stop = false;

    this.count++;
    if (Array.isArray(arr)) {
      arr.forEach((item, idx) => {
        if (Array.isArray(item)) {
          if (item.length === 0) item.push(0);
          this.restArr.push(...item); // поднять на 1 уровень элементы из массива
        }
      });
    }

    arr = [...this.restArr]; // скопировать результат
    this.restArr = []; // обнуление после каждой рекурсии


    if (arr.length > 0) this.calculateDepth(arr);

    this.stop = true;
    return this.count;
  }
}

module.exports = {
  DepthCalculator
};

// npm run test ./test/recursive-depth.test.js
