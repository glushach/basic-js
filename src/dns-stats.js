const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const matrix = domains.map(item => item.split('.').reverse().map((item, idx) => {
    if (idx === 0) {
      return `.${item}`;
    } else {
      return item
    }
  }));

  const result = [];

  matrix.forEach((item, idx) => {
    item.forEach((inner, iidx) => {
      result.push(item.slice(0, iidx + 1));
    })
  });

  const innerJoin = result.map(item => item.join('.'));

  const object = {};

  innerJoin.forEach((item, idx, arr) => {
    object[item] = object[item] + 1 || 1;
  });
  return object;
}

module.exports = {
  getDNSStats
};

// npm run test ./test/dns-stats.test.js
