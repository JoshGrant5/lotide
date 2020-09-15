const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`😊😊😊 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
};

// Test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual('Josh', 'josh');
assertEqual('Josh', 'Josh');


