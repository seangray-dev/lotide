const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return an object with the correct letter positions for a sentence", () => {
    const sentence = "hello world";
    const expected = {
      h: [0],
      e: [1],
      l: [2, 3, 9],
      o: [4, 7],
      w: [6],
      r: [8],
      d: [10],
    };
    const actual = letterPositions(sentence);
    assert.deepStrictEqual(actual, expected);
  });

  it("should return an empty object when given an empty string", () => {
    const sentence = "";
    const expected = {};
    const actual = letterPositions(sentence);
    assert.deepStrictEqual(actual, expected);
  });

  it("should include only lowercase letters in the output object", () => {
    const sentence = "Hello World!";
    const expected = {
      h: [0],
      e: [1],
      l: [2, 3, 9],
      o: [4, 7],
      w: [6],
      r: [8],
      d: [10],
    };
    const actual = letterPositions(sentence);
    assert.deepStrictEqual(actual, expected);
  });

  it("should correctly handle multiple occurrences of the same letter", () => {
    const sentence = "hello";
    const expected = {
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4],
    };
    const actual = letterPositions(sentence);
    assert.deepStrictEqual(actual, expected);
  });

  it("should correctly handle spaces in the input string", () => {
    const sentence = "this is a test";
    const expected = {
      t: [0, 10, 13],
      h: [1],
      i: [2, 5],
      s: [3, 6, 12],
      a: [8],
      e: [11],
    };
    const actual = letterPositions(sentence);
    assert.deepStrictEqual(actual, expected);
  });
});
