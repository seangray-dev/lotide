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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: [${actual}] === [${expected}]`;
  } else {
    return `🛑 Assertion Failed: [${actual}] !== [${expected}]`;
  }
};

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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // -> true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // -> false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const student1 = { subjects: ["math", "science"] };
const student2 = { subjects: ["math", "science"] };

eqObjects(student1, student2); // -> true
assertEqual(eqObjects(student1, student2), true);
