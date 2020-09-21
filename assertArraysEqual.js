const eqArrays = require('./eqArrays');

// Use for function overwridden by implementation of mocha and chai for testing
const assertArraysEqual = (array1, array2) => {
  const inspect = require('util').inspect; // allows us to view the arrays in our console.log
  eqArrays(array1, array2) ? console.log(`😊😊😊 Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
};

module.exports = assertArraysEqual;