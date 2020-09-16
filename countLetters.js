const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
};

// Return an object listing the count of each letter in the sentence
const countLetters = sentence => {
  let counts = {};
  for (let letter of sentence) {
    if (letter != ' ') {
      if (letter in counts) {
        counts[letter] += 1;
      } else {
        counts[letter] = 1;
      }
    }
  }
  return counts;
};

// Test code
console.log(countLetters('josh'));
console.log(countLetters('longer than josh'));
