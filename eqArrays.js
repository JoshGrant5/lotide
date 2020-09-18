const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
};

// Take in two arrays and returns true or false, based on a perfect match
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

// Test code
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => false
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays([[2, 3], [4, 5, [6, 7, 8]]], [[2, 3], [4, 5, [6, 7, 8]]])); // => true