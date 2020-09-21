# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @joshgrant5/lotide`

**Require it:**

`const _ = require('@joshgrant5/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the head of an array (first item).
* `tail(array)`: returns the tail of an array (every item following the first item).
* `middle(array)`: returns the middle item of an array (returns middle 2 items if length of array is even). (returns an empty array if length of array < 3).
* `assertEqual(actual, expected)`: logs passing or failing message for actual === expected.
* `eqArrays(array1, array2)`: returns boolean for array1 === array2 (perfect match).
* `assertArraysEqual(array1, array2)`: logs passing or failing message for array1 === array2.
* `eqObjects(object1, object2)`: returns boolean for object1 === object2 (perfect match).
* `assertObjectsEqual(object1, object2)`: logs passing or failing message for object1 === object2.
* `countOnly(allItems, itemsToCount)`: returns object for the count of each item specified by itemsToCount (an object specifiying what to count).
* `countLetters(sentence)`: returns an object for the count of each letter in the sentence.
* `findKey(object, callback)`: scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue(object, value)`: scans the object and return the first key which contains the given value.
* `flatten(array)`: returns a "flattened" array // => flatten([1, 2, [3, 4], 5); // => [1, 2, 3, 4, 5].
* `letterPositions(sentence)`: returns an object of all the indices in the string where each character is found.
* `map(array, callback)`: takes in two arguments: (1. An array to map, 2. A callback function). Returns a new array based on the results of the callback function.
* `takeUntil(array, callback)`: Collecs items from a provided array until the callback provided returns a truthy value. Returns an array of the collected items.
* `without(source, itemsToRemove)`: returns a new array with the specified item(s) removed.