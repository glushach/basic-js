const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const obj = {};
  arr.forEach((item, idx) => {
    obj[idx] = item;
  });

  const sortedArr = [];
  for (let key in obj) {
    if (obj[key] !== -1) {
      sortedArr.push(obj[key]);
    }
  }
  sortedArr.sort((a, b) => a - b);
  for (let key in obj) {
    if (obj[key] === -1) {
      sortedArr.splice(+key, 0, obj[key])
    }
  }
  return sortedArr;
}

module.exports = {
  sortByHeight
};

// npm run test ./test/sort-by-height.test.js
