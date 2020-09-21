const assertArraysEqual = require('../assertArraysEqual');

// Test code
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // => false
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual([[2, 3], [4]], [[2, 3], [4]], true); // => true
assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]], false); // => false
assertArraysEqual([[2, 3], [4]], [[2, 3], 4], false); // => false
assertArraysEqual([[2, 3], [4, 5, [6, 7, 8]]], [[2, 3], [4, 5, [6, 7, 8]]], false); // => true