const eqArrays = require('./eqArrays');
 
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;

// assertArraysEqual(middle([1]), []); // => true
// assertArraysEqual(middle([1, 2]), []); // => true
// assertArraysEqual(middle([1, 2, 3]), [2]); // => true
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => true
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => true
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => true