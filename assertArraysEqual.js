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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // returns true
assertArraysEqual([1, 2, "3"], [1, "2", 3]); // returns false
assertArraysEqual(["1", 2, 3], ["1", 2, 3]); // returns true
