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

// Test code
// console.log(letterPositions('hello'));
// assertArraysEqual(letterPositions('hello').l, [2, 3]);
// console.log(letterPositions('lighthouse in the house'));
// assertArraysEqual(letterPositions('lighthouse in the house'), {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// });