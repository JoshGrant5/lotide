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

// Return a new array with specified item removed
const without = (source, itemsToRemove) => {
  let newArray = [];
  for (let item of source) {
    let match = false;
    for (let removedItem of itemsToRemove) {
      if (item === removedItem) {
        match = true;
      }
    }
    if (!match) {
      newArray.push(item);
    }
  }
  return newArray;
};

// Test code
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", "2", "3"], ["3", "2", "1"])); // => []
console.log(without([1, "2", "3"], [1, 2, "3"])); // => ["2"]
// Test case 
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => true