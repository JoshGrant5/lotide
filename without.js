const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Return a new array with specified item removed
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