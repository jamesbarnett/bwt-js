'use strict';

var _ = require("lodash");

var MoveToFrontDecoder = function(encoded, minValueSet) {
  this.encoded = encoded;
  this.minValueSet = minValueSet;
  this.decoded = decode(encoded, minValueSet);
}

function decode(encoded, minValueSet) {
  var decoded = [];
  var buffer = minValueSet.slice(0);

  for (var i = 0; i < encoded.length; i++) {
    decoded.push(buffer[encoded[i]]);

    if (encoded[i] > 0) {
      var temp = buffer[encoded[i]];
      buffer.splice(encoded[i], 1);
      buffer.unshift(temp);
    }

    console.log("decoded: " + decoded);
  }

  return decoded.join("");
}

exports.MoveToFrontDecoder = MoveToFrontDecoder;
