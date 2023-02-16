const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("should count the number of times an item appears in an array when included in itemsToCount", () => {
    const allItems = ["a", "b", "a", "c", "b"];
    const itemsToCount = { a: true, b: true, c: false };
    const expected = { a: 2, b: 2 };
    const actual = countOnly(allItems, itemsToCount);
    assert.deepStrictEqual(actual, expected);
  });

  it("should return an empty object when given an empty array", () => {
    const allItems = [];
    const itemsToCount = { a: true, b: true };
    const expected = {};
    const actual = countOnly(allItems, itemsToCount);
    assert.deepStrictEqual(actual, expected);
  });

  it("should return an empty object when no items match the ones to count", () => {
    const allItems = ["a", "b", "c"];
    const itemsToCount = { d: true, e: true };
    const expected = {};
    const actual = countOnly(allItems, itemsToCount);
    assert.deepStrictEqual(actual, expected);
  });

  it("should ignore items that are not included in itemsToCount", () => {
    const allItems = ["a", "b", "c"];
    const itemsToCount = { a: true, b: true };
    const expected = { a: 1, b: 1 };
    const actual = countOnly(allItems, itemsToCount);
    assert.deepStrictEqual(actual, expected);
  });
});
