var expect = require("chai").expect;
var index = require("../lib/index.js");

describe("Index", function() {
  describe(".rotate", function() {
    it("rotates a string", function() {
      var result = index.rotate("banana", 0);
      expect(result).to.equal("ananab");
    });
  });

  describe(".sortedPermutations", function() {
    it("sorts permutations", function() {
      var result = index.sortedPermutations("banana");
      expect(result[0]).to.equal("abanan");
    });
  });

  describe(".encodes", function() {
    it("encodes correctly", function() {
      var result = index.encode("banana");
      expect(result).to.deep.equal({ "lastColumn": "nnbaaa", "index": 3 });
    });
  });

  describe(".decodes", function() {
    it("decodes correctly", function() {
      var result = index.decode({ "lastColumn": "nnbaaa", "index": 3 });
      expect(result).to.equal("banana");
    });

    it("encodes and decodes", function() {
      var result = index.decode(index.encode("banana"));
      expect(result).to.equal("banana");
    });

    it("encodes and decodes UTF-8", function() {
      var result = index.decode(index.encode("åßçde"));
      expect(result).to.equal("åßçde");
    });
  });
});
