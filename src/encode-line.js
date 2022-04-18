const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';

  const arr = str.split('');
  const result = [];
  let prevElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (prevElement === arr[i]) {
      result.push(arr[i]);
      prevElement = arr[i];
    } else {
      result.push('-');
      result.push(arr[i]);
      prevElement = arr[i];
    }
  }

  const convert = result.join('').split('-');

  const string = convert.map(item => {
    if (item.length > 1) {
      return `${item.length}${item[0]}`;
    } else {
      return item;
    }
  });



  return string.join('');
}

module.exports = {
  encodeLine
};

// npm run test ./test/encode-line.test.js
