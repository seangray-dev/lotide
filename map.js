const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

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

// Test 1
const people = ["sean", "melissa"];
const peopleResults = map(people, (item) => item.length);
console.log(assertArraysEqual(peopleResults, [4, 7]));

// Test 2
const cookies = [
  { name: "🍪", type: "chocolate" },
  { name: "🍪", type: "oatmeal" },
  { name: "🥠", type: "fortune" },
  { name: "🍪", type: "peanut butter" },
];
const isChocCookie = map(cookies, (cookie) => cookie.type === "chocolate");
console.log(assertArraysEqual(isChocCookie, [true, false, false, false]));

// Test 3
const numbers = [2, 4, 6, 8, 10];
const squareNum = (num) => num * num;
const squaredNumbers = map(numbers, squareNum);
console.log(assertArraysEqual(squaredNumbers, [4, 16, 36, 64, 100]));
