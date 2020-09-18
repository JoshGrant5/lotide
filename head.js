const assertEqual = require('./assertEqual');

// Return the head of the array
const head = items => items[0];

module.exports = head;

// Test code 
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), 5);
