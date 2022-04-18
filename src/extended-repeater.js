const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // проверка на null
  if (str === null) str = 'null';
  if (options.addition === null) options.addition = 'null';

  // Проверка на Symbol
  if (`${str}`) str = `${str}`;
  if (`${options.addition}` !== 'undefined') options.addition = `${options.addition}`; //если не Symbol, то дает строку 'undefined'

  // приведение с строке
  let string = str.toString();
  if (!options.hasOwnProperty('addition')) {
    options.addition = '';
  }
  options.addition = options.addition.toString();


  // тело задачи
  if (!options.hasOwnProperty('repeatTimes')) { // если нету repeatTimes - количества повторений str
    return str + options.addition; // вернуть строку только с addition
  }

  if (!options.hasOwnProperty('separator')) { //Объязательное условие задачи
    options.separator = '+';
  }
  if (!options.hasOwnProperty('additionSeparator')) { //Объязательное условие задачи
    options.additionSeparator = '|';
  }
  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.additionRepeatTimes = 1;
  }

  let combineSeparator;
  let mainString = string;

  combineSeparator = options.addition + options.additionSeparator;
  mainString += combineSeparator.repeat(options.additionRepeatTimes).slice(0, -options.additionSeparator.length);
  mainString += options.separator;
  return mainString.repeat(options.repeatTimes).slice(0, -options.separator.length);
}


module.exports = {
  repeater
};

// npm run test ./test/extended-repeater.test.js
