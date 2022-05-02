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
  let newArr = str.split(''); 
  let obj = {}; 

  newArr.forEach(char => (obj[char]) ? obj[char] += 1 : obj[char] = 1);
  return obj; 
}

module.exports = {
  encodeLine
};
