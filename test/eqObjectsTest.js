const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it("returns false for eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it("returns true for eqObjects({ a: {b: 1}, b: { z: 2, y: 4, a: [1,2] }}, { a: { b: 1 }, b: { y: 4, a: [1,2], z: 2 }})", () => {
    assert.isTrue(eqObjects({ a: {b: 1}, b: { z: 2, y: 4, a: [1,2] }}, { a: { b: 1 }, b: { y: 4, a: [1,2], z: 2 }}));
  });
});