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

// Assertion for object comparisons
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; // allows us to view the object in our console.log
  eqObjects(actual, expected) ? console.log(`😊😊😊 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// Test code
// assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // => true
// assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2" }); // => false
// assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }); // => true
assertObjectsEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
assertObjectsEqual({ a: [{z: 1}], b: 2 }, { a: { z: 1 }, b: 2 }); // => false
assertObjectsEqual({ a: {b: 1}, b: { z: 2, y: 4, a: [1,2] }}, { a: { b: 1 }, b: { y: 4, a: [1,2], z: 2 }}); // => true
