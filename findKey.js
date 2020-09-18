const assertEqual = require('./assertEqual');

/* Function takes in an object and a callback.
It should scan the object and return the first key for which the callback returns a truthy value.
If no key is found, then it should return undefined */

const findKey = (object, callback) => {
  let found;
  for (let key in object) {
    if (callback(object[key])) {
      found = key;
      break;
    }
  }
  return found;
};

module.exports = findKey;

// Test code
// let test1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// let test2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === undefined); // => "undefined"

// let test3 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3); // => "Akaleri"

// assertEqual(test1, 'noma'); // => true
// assertEqual(test1, 'Ora'); // => false
// assertEqual(test2, undefined); // => true
// assertEqual(test3, 'Akaleri'); // => true