const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

/* Our map function will take in two arguments: (1. An array to map, 2. A callback function)
The map function will return a new array based on the results of the callback function */

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// Test code
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word.toUpperCase());
// const results3 = map(words, word => word[word.length - 1]);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // => true
// assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]); // => true
// assertArraysEqual(results3, ['d', 'l', 'o', 'r', 'm']); // => true
// assertArraysEqual(results3, ['g', 'c', 't', 'm', 't']); // => false