const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  // check if the number of keys in both objects are of the same length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // loop through object1 keys
  for (const key in object1) {
    // check if both objects' keys are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // if they are, use eqArrays to compare the arrays
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;
