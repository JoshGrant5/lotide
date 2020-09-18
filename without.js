const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

// Return a new array with specified item removed
// array.includes()
const without = (source, itemsToRemove) => {
  let newArray = [];
  for (let item of source) { 
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = without;

// Test code
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
// console.log(without(["1", "2", "3"], ["3", "2", "1"])); // => []
// console.log(without([1, "2", "3"], [1, 2, "3"])); // => ["2"]
// // Test case 
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => true