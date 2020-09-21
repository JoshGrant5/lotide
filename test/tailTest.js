const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns 2 for length of tail(['Hello', 'Lighthouse', 'Labs'])", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2); 
  });
});

// Chai gives us assert.deepEqual, because assert.strictEqual simply uses === to compare values, which will not work for comparing objects and arrays.