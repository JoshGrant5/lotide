const assertEqual = require('./assertEqual');

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

module.exports = countLetters;

// Test code
// console.log(countLetters('josh'));
// console.log(countLetters('longer than josh'));
