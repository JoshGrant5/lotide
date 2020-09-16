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
 
const assertArraysEqual = (array1, array2) => {
  eqArrays(array1, array2) ? console.log(`😊😊😊 Assertion Passed: ${array1} === ${array2}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${array1} !== ${array2}`);
};

// Returns an object of all the indices in the string where each character is found
const letterPositions = function(sentence) {
  const results = {};
  let lowerCased = sentence.toLowerCase();
  for (let i = 0; i < lowerCased.length; i++) {
    if (lowerCased[i] !== ' ') {
      if (lowerCased[i] in results) {
        results[lowerCased[i]].push(i);
      } else {
        results[lowerCased[i]] = [i];
      }
    }
  }
  return results;
};

// Test code
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions('hello').l, [2, 3]);
console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions('lighthouse in the house'), {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
});