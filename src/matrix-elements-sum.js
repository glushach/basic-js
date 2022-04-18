const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const sort = [];
  matrix.forEach((item, index, arr) => {
    if (index) { // не выйти за переднюю границу главного массива
      item.forEach((i, idx) => {
        if (arr[index - 1][idx] !== 0) { // попасть к предыдущему элементу вложенного массива
          sort.push(i);
        }
      });
    } else {
      sort.push(...item); // первый массив
    }
  });
  return sort.reduce((sum, item) => sum + item, 0);
}

module.exports = {
  getMatrixElementsSum
};

// npm run test ./test/matrix-elements-sum.test.js