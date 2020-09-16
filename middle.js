const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
 
const assertArraysEqual = (array1, array2) => {
  const inspect = require('util').inspect; // allows us to view the arrays in our console.log
  eqArrays(array1, array2) ? console.log(`😊😊😊 Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
};

// Return array of the middle most element, or elements if array is even number in length
const middle = array => {
  let midElement = [];
  if (array.length < 3) {
    return midElement;
  } else {
    if (array.length % 2 === 0) {
      let num = array.length / 2;
      midElement.push(num, num + 1);
    } else {
      let num = Math.floor((array.length / 2) + 1);
      midElement.push(num);
    }
    return midElement;
  }
};

assertArraysEqual(middle([1]), []); // => true
assertArraysEqual(middle([1, 2]), []); // => true
assertArraysEqual(middle([1, 2, 3]), [2]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => true
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => true