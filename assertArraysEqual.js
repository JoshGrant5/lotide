const eqArrays = (array1, array2) => {
  let equal = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      equal = false;
    }
  }
  return (equal ? true : false);
};
 
const assertArraysEqual = (array1, array2) => {
  eqArrays(array1, array2) ? console.log(`😊😊😊 Assertion Passed: ${array1} === ${array2}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${array1} !== ${array2}`);
};

// Test code
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => false
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false