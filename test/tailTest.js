const tail = require("../tail");
const assert = require("chai").assert;

const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns true for ['Lighthouse','Labs']", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it("returns true for 2", () => {
    assert.deepEqual(result.length, 2);
  });
  it("returns true for 'Lighthouse'", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("returns true for 'Labs'", () => {
    assert.strictEqual(result[1], "Labs");
  });
});
