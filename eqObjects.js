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

// Test code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// const ef = { c: "1", b: ["2", 3] };
// const fe = { d: ["2", 3], c: "1" };
// console.log(eqObjects(ef, fe)); // => false

// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
// console.log(eqObjects({ a: [{z: 1}], b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: {b: 1}, b: { z: 2, y: 4, a: [1,2] }}, { a: { b: 1 }, b: { y: 4, a: [1,2], z: 2 }})); // => true