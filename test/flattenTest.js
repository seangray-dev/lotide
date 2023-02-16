const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten", () => {
  it("should flatten a nested array", () => {
    const nestedArray = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const expected = [1, 2, 3, 4, 5, 6];
    const actual = flatten(nestedArray);
    assert.deepStrictEqual(actual, expected);
  });

  it("should flatten a deeply nested array", () => {
    const deeplyNestedArray = [
      [
        [1, 2],
        [3, 4],
      ],
      [
        [5, 6],
        [7, 8],
      ],
    ];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    const actual = flatten(deeplyNestedArray);
    assert.deepStrictEqual(actual, expected);
  });

  it("should return an empty array for an empty nested array", () => {
    const emptyArray = [];
    const expected = [];
    const actual = flatten(emptyArray);
    assert.deepStrictEqual(actual, expected);
  });

  it("should return an error message if input is not an array", () => {
    const notAnArray = "this is not an array";
    const expected = "This is not an array";
    const actual = flatten(notAnArray);
    assert.strictEqual(actual, expected);
  });
});
