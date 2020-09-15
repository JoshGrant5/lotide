const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`) :
  console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
};
// Take in two arrays and returns true or false, based on a perfect match
const eqArrays = (array_1, array_2) => {
  let equal = true;
  for (let i = 0; i < array_1.length; i++) {
    if (array_1[i] !== array_2[i] || array_1.length !== array_2.length) {
      equal = false;
    }
  }
  return (equal ? true : false);
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])) // => false
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS