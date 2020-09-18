const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};
 
const assertArraysEqual = (array1, array2) => {
  const inspect = require('util').inspect; // allows us to view the arrays in our console.log
  eqArrays(array1, array2) ? console.log(`😊😊😊 Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
};

// Test code
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => false
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual([[2, 3], [4]], [[2, 3], [4]], true); // => true
assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]], false); // => false
assertArraysEqual([[2, 3], [4]], [[2, 3], 4], false); // => false
assertArraysEqual([[2, 3], [4, 5, [6, 7, 8]]], [[2, 3], [4, 5, [6, 7, 8]]], false); // => true