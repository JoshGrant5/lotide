const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');

// Assertion for object comparisons
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; // allows us to view the object in our console.log
  eqObjects(actual, expected) ? console.log(`😊😊😊 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;

// Test code
// assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // => true
// assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2" }); // => false
// assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }); // => true
// assertObjectsEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
// assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
// assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
// assertObjectsEqual({ a: [{z: 1}], b: 2 }, { a: { z: 1 }, b: 2 }); // => false
// assertObjectsEqual({ a: {b: 1}, b: { z: 2, y: 4, a: [1,2] }}, { a: { b: 1 }, b: { y: 4, a: [1,2], z: 2 }}); // => true
