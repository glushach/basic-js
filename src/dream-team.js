const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const logo = members.map((item) => {
    if (typeof(item) === 'string') {
      return item.trim().split('');
    }
  }).filter(item => {
    if(item) {
      return item;
    }
  });

  const chars = [];
  logo.forEach((item, idx) => {
    for (let i = 0; i < item.length; i++) {
      if (i === 0) {
        chars.push(item[i]);
        break;
      }
    }
  });

  return chars.map(item => item.toUpperCase()).sort().join('');
}

module.exports = {
  createDreamTeam
};

// npm run test ./test/dream-team.test.js
