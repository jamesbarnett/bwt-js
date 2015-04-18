'use strict';

var _ = require("lodash");

var MoveToFrontEncoder = function(str) {
  this.str = str;
  this.minValueSet = findMinValueSet(str);
  this.encoded = encode(str, this.minValueSet);
};

function findMinValueSet(str) {
  var minValueSet = [];
  for (var i = 0; i < str.length; i++) {
    minValueSet.push(str[i]);
  }

  minValueSet.sort();
  minValueSet = _.uniq(minValueSet, true);
  return minValueSet;
}

function encode(str, minValueSet) {
  var encoded = [];
  var buffer = minValueSet.slice(0);

  for (var i = 0; i < str.length; i++) {
    encoded.push(buffer.indexOf(str[i]));

    if (encoded[encoded.length - 1] > 0) {
      var temp = buffer[encoded[encoded.length - 1]];
      buffer.splice(encoded[encoded.length - 1], 1);
      buffer.unshift(temp);
    }
  }

  return encoded;
}

exports.MoveToFrontEncoder = MoveToFrontEncoder;
