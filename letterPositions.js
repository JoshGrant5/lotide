const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Returns an object of all the indices in the string where each character is found
const letterPositions = sentence => {
  const results = {};
  let lowerCased = sentence.toLowerCase();
  for (let i = 0; i < lowerCased.length; i++) {
    if (lowerCased[i] !== ' ') {
      if (lowerCased[i] in results) {
        results[lowerCased[i]].push(i);
      } else {
        results[lowerCased[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;