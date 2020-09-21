const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for eqArrays([[2, 3], [4]], [[2, 3], [4]])", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it("returns false for eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });
  it("returns true for eqArrays([[2, 3], [4, 5, [6, 7, 8]]], [[2, 3], [4, 5, [6, 7, 8]]])", () => {
    assert.isTrue(eqArrays([[2, 3], [4, 5, [6, 7, 8]]], [[2, 3], [4, 5, [6, 7, 8]]]));
  });
});