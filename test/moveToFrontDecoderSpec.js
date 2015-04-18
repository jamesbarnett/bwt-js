var expect = require("chai").expect;
var mtf = require("../lib/moveToFrontDecoder.js");

describe("MoveToFrontDecoder", function() {
  describe(".decode", function() {
    it("decodes a value", function() {
      var result = new mtf.MoveToFrontDecoder([2, 0, 2, 2, 0, 0],
        ["a", "b", "n"]).decoded;
      expect(result).to.equal("nnbaaa");
    });
  });
});
