const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) { // пример активности
  const MODERN_ACTIVITY = 15;    // современная активность
  const HALF_LIFE_PERIOD = 5730; // период полураспада

  if (
      !sampleActivity ||
      !Number(sampleActivity) ||
      typeof(sampleActivity) !== 'string'
  ) {
    return false;
  }

  const result = Math.ceil(Math.log(15 / sampleActivity) / (0.693 / 5730));

  return (result > 0) ? result : false;
}

module.exports = {
  dateSample
};

// npm run test ./test/carbon-dating.test.js