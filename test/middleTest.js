const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

console.log(assertArraysEqual(middle([1, 2, 3]), middle([1, 2, 3])));
