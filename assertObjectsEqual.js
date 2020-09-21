const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');

// Use for function overwridden by implementation of mocha and chai for testing
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; // allows us to view the object in our console.log
  eqObjects(actual, expected) ? console.log(`😊😊😊 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;