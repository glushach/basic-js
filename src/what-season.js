const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {Error} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  if (date[Symbol.toStringTag]) {
    throw new Error('Invalid date!');
  }

  if(JSON.stringify(date) === JSON.stringify(new Date())) {
    throw new Error('Invalid date!');
  }

  if (!Date.parse(date)) {
    throw new Error('Invalid date!');
  }


  let month = date.toString().slice(4, 7);

  if (month === "Jan" || month === "Feb" || month === "Dec") {
    return 'winter';
  } else if (month === "Mar" || month === "Apr" || month === "May") {
    return 'spring';
  } else if (month === "Jun" || month === "Jul" || month === "Aug") {
    return 'summer';
  } else if (month === "Sep" || month === "Oct" || month === "Nov") {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
// npm run test ./test/what-season.test.js

// node src/what-season.js
