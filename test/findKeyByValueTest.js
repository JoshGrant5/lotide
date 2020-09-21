const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

describe("#findKeyByValue", () => {
  it("returns drama when given show 'The Wire'", () => {
    assert.strictEqual((findKeyByValue(bestTVShowsByGenre, "The Wire")), "drama");
  });
  it("returns sciFi when given show 'The Expanse'", () => {
    assert.strictEqual((findKeyByValue(bestTVShowsByGenre, "The Expanse")), "sciFi");
  });
  it("returns undefined when given show 'That 70s Show'", () => {
    assert.strictEqual((findKeyByValue(bestTVShowsByGenre, "That '70s Show")), undefined);
  });
});