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

// Return a "flattened" array 
const flatten = array => {
  let flattened = [];
  for (let item of array) {
    Array.isArray(item) ? flattened = flattened.concat(item) : flattened.push(item);
  }
  return flattened;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

