# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @seangray-dev/lotide`

**Require it:**

`const _ = require('@seangray-dev/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: compares two arrays for equality and returns a boolean value while also logging a message to the console.
  [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/assertArraysEqual.md)
- `assertEqual`: compares two values for equality and returns a message indicating whether the assertion passed or failed. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/assertEquals.md)
- `assertObjectsEqual`: compares two objects for equality and returns a message indicating whether the assertion passed or failed. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/assertObjectsEqual.md)
- `countLetters`: takes in a string and returns an object containing a count of each letter in the string (excluding spaces). [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/countLetters.md)
- `countOnly`: takes in an array of items and an object containing a set of items to count, and returns an object with counts of the items in the original array that are specified in the input object. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/countOnly.md)
- `eqArrays`: takes in two arrays and returns a boolean value indicating whether they are equal. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/eqArrays.md)
- `eqObjects`: takes in two objects and returns a boolean value indicating whether they are equal. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/eqObjects.md)
- `findKey`: takes in an object and a callback function, and returns the first key for which the callback function returns a truthy value. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/findKey.md)
- `findKeyByValue`: takes in an object and a value, and returns the first key in the object that has the specified value. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/findKeyByValue.md)
- `flatten`: takes in an array and returns a new flattened array (an array with all subarrays flattened into a single level). [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/flatten.md)
- `head`: takes in an array and returns the first element [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/head.md)
- `letterPositions`: takes in a string and returns an object that contains arrays of the positions of each letter in the string. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/letterPositions.md)
- `map`: takes in an array and a callback function, and returns a new array with each element transformed by the callback function. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/map.md)
- `middle`: takes in an array and returns the middle element(s) of the array. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/middle.md)
- `tail`: takes in an array and returns a new array with all elements except for the first element of the input array. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/tail.md)
- `takeUntil`: takes in an array and a callback function, and returns a new array that includes all elements of the input array up until the point where the callback function returns a truthy value. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/takeUntil.md)
- `without`: filters elements from the `source` array and returns a new array that excludes any elements that are also in the `itemsToRemove` array. [See Example](https://github.com/seangray-dev/lighthouse-web-notes/blob/master/Module_1/lotide/without.md)
