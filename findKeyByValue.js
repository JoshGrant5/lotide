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

// Test code
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);