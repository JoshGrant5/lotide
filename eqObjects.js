const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (!Object.keys(object2).includes(key)) { // are the keys the same for both objects?
        return false;
      }
      if (typeof object1[key] === 'object') {
        if (Array.isArray(object1[key])) { // is the value an array?
          if (!eqArrays(object1[key], object2[key])) { // if so, does this array match with the value of object2?
            return false;
          }
        } else {
          if (!eqObjects(object1[key], object2[key])) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;