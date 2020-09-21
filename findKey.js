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