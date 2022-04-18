const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = n.toString().split('');
  if (result.length === 2) {
    if (result[0] < result[1]) {
      result.splice(0, 1);
    } else {
      result.splice(1, 1);
    }
  }

  result.forEach((item, idx) => {
    if ( result[idx + 1] > item) {
      result.splice(idx, 1);
    }
  });
  return +result.join('');
}

module.exports = {
  deleteDigit
};

// npm run test ./test/delete-digit.test.js