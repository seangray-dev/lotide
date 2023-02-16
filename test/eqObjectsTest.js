const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("should return true when given two equal objects with primitive values", () => {
    const obj1 = { a: 1, b: "hello", c: true };
    const obj2 = { a: 1, b: "hello", c: true };
    const expected = true;
    const actual = eqObjects(obj1, obj2);
    assert.strictEqual(actual, expected);
  });

  it("should return false when given two objects with different keys", () => {
    const obj1 = { a: 1, b: "hello" };
    const obj2 = { a: 1, c: "world" };
    const expected = false;
    const actual = eqObjects(obj1, obj2);
    assert.strictEqual(actual, expected);
  });

  it("should return false when given two objects with different values", () => {
    const obj1 = { a: 1, b: "hello", c: true };
    const obj2 = { a: 1, b: "world", c: true };
    const expected = false;
    const actual = eqObjects(obj1, obj2);
    assert.strictEqual(actual, expected);
  });

  it("should return true when given two equal objects with nested objects and arrays", () => {
    const obj1 = { a: 1, b: [2, 3], c: { d: "hello" } };
    const obj2 = { a: 1, b: [2, 3], c: { d: "hello" } };
    const expected = true;
    const actual = eqObjects(obj1, obj2);
    assert.strictEqual(actual, expected);
  });

  it("should return false when given two objects with nested arrays with different values", () => {
    const obj1 = { a: 1, b: [2, 3], c: { d: "hello" } };
    const obj2 = { a: 1, b: [2, 4], c: { d: "hello" } };
    const expected = false;
    const actual = eqObjects(obj1, obj2);
    assert.strictEqual(actual, expected);
  });

  it("should return false when given two objects with nested objects with different values", () => {
    const obj1 = { a: 1, b: [2, 3], c: { d: "hello", e: { f: "world" } } };
    const obj2 = { a: 1, b: [2, 3], c: { d: "hello", e: { f: "universe" } } };
    const expected = false;
    const actual = eqObjects(obj1, obj2);
    assert.strictEqual(actual, expected);
  });
});
