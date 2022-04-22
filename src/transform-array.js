const { NotImplementedError } = require('../extensions/index.js');
/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  if(arr.length === 0) return [];

  const result = [...arr];

  result.forEach((item, idx, array) => {
    if (item === '--discard-next') { // удалить следующий элемент массива
      if (result[idx + 1] && typeof array[idx + 1] !== 'number') {
        result.splice(array[idx + 1], 1);
      } else if (result[idx + 2] === '--double-prev' || result[idx + 2] === '--discard-prev' ) {
        result.splice(array[idx - 1], 3);
      } else {
        result.splice(idx, 1);
      }
    } else if (item === '--discard-prev') { // удалить предыдущий элемент массива
      if (result[idx - 1] && typeof array[idx - 1] !== 'number') {
        result.splice(array[idx - 1], 1);
      } else {
        result.splice(idx, 1);
      }
    } else if (item === '--double-next') { // дублировать следующий элемент массива
      if (result[idx + 1] && typeof array[idx + 1] !== 'number') {
        result.splice(idx, 1, array[idx + 1]);
      } else if (result[idx + 2] === '--double-prev') {
        result.splice(idx, 1, array[idx + 1]);
      } else {
        result.splice(idx, 1);
      }
    } else if (item === '--double-prev') { // дублировать предыдущий элемент массива
      if (result[idx - 1]) {
        result.splice(idx, 1, array[idx - 1]);
      } else {
        result.splice(idx, 1);
      }
    }
  });
  return result;

}


module.exports = {
  transform
};

// npm run test ./test/transform-array.test.js

// node src/transform-array.js