const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  function getTurns(n, disksNumber) {
    if (disksNumber === 1) {
      return n;
    } else {
      return n * getTurns(n, disksNumber - 1);
    }
  }
  let turns = getTurns(2, disksNumber);
  return {
    turns: turns - 1,
    seconds: Math.floor((turns - 1) / (turnsSpeed / 3600))
  }
}

module.exports = {
  calculateHanoi
};
// npm run test ./test/hanoi-tower.test.js