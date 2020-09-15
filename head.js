const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
};

// Return the head of the array
const head = items => items[0];

// Test code 
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
