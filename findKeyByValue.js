const assertEqual = require('./assertEqual');

// Scan the object and return the first key which contains the given value
const findKeyByValue = (object, value) => {
  let outputKey;
  for (let key in object) {
    if (object[key] === value) {
      outputKey = key;
    }
  }
  return outputKey;
};

module.exports = findKeyByValue;