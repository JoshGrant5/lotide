const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

/* Function will keep collecting items from a provided array until the callback provided returns a truthy value
Returns an array of the collected items */

const takeUntil = (array, callback) => {
  let newArray = [];
  for (let item of array) {
    if (callback(item)) {
      return newArray;
    } else {
      newArray.push(item);
    }
  }
};

module.exports = takeUntil;

// Test code
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // => true
// console.log('---');
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // => true
