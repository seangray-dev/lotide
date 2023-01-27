const eqArrays = function (actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("equal");
    return true;
  } else {
    console.log("not equal");
    return false;
  }
};

const flatten = function (array) {
  const flattenedArray = [];
  if (Array.isArray(array)) {
    return flattenedArray.concat(...array);
  } else {
    return `This is not an array`;
  }
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten({}));
