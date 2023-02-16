const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  const programmingLanguages = {
    JavaScript: 1995,
    Python: 1991,
    Java: 1995,
    "C++": 1985,
    Rust: 2010,
  };

  it("should return 'JavaScript' given '1995'", () => {
    const expected = "JavaScript";
    const actual = findKeyByValue(programmingLanguages, 1995);
    assert.strictEqual(actual, expected);
  });

  it("should return undefined when given 'undefined'", () => {
    const expected = undefined;
    const actual = findKeyByValue(programmingLanguages, 1970);
    assert.strictEqual(actual, expected);
  });

  it("should return 'C++' when given '1985'", () => {
    const expected = "C++";
    const actual = findKeyByValue(programmingLanguages, 1985);
    assert.strictEqual(actual, expected);
  });

  it("should return 'Rust' when given '2010'", () => {
    const expected = "Rust";
    const actual = findKeyByValue(programmingLanguages, 2010);
    assert.strictEqual(actual, expected);
  });

  it("should return the first key that matches the value when there are multiple keys with the same value", () => {
    const expected = "JavaScript";
    const actual = findKeyByValue(programmingLanguages, 1995);
    assert.strictEqual(actual, expected);
  });
});
