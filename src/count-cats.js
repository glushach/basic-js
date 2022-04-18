const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const result = [];

  matrix.forEach(item => {
    item.forEach(inner => {
      if (typeof(inner) === 'string' && inner === '^^') {
        result.push(inner);
      }
    });
  });
  return result.length;
}

module.exports = {
  countCats
};

// npm run test ./test/count-cats.test.js
