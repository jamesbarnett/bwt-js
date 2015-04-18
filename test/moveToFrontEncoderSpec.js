var expect = require('chai').expect;
var mtf = require('../lib/moveToFrontEncoder.js');

describe("MoveToFront", function() {
  describe(".encode", function() {
    it("encodes a simple string", function() {
      var result = new mtf.MoveToFrontEncoder("nnbaaa").encoded;
      expect(result).to.deep.equal([2, 0, 2, 2, 0, 0])
    });
  });

  describe(".minValueSet", function() {
    it("finds the minimum value set", function() {
      var result = new mtf.MoveToFrontEncoder("nnbaaa").minValueSet;
      expect(result).to.deep.equal(["a", "b", "n"]);
    });
  })
});
