const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns a count of 2 for Fang", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("returns undefined for Karima", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
});