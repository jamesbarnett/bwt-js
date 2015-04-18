var _ = require('lodash');

function rotate(str, index) {
  index = typeof index !== 'undefined' ? index : 0;
  return str.slice(index+1) + str.slice(0, index+1);
}

function encode(str) {
  var ps = sortedPermutations(str);

  return {
    'lastColumn': lastColumn(ps),
    'index': ps.indexOf(str)
  };
}

function sortedPermutations(str) {
  var ps = [str];
  for (var i = 0; i < str.length - 1; i++) {
    ps.push(rotate(str, i));
  }

  return ps.sort(function (x, y) {
    return x.localeCompare(y);
  });
}

function lastColumn(ps) {
  return _.map(ps, function (x) {
    return x.slice(-1);
  }).join("");
}

function decode(encoded) {
  var ps = [""];
  var pindex = 0;

  while (_.any(ps, function (x) {
    return x.length < encoded["lastColumn"].length;
  })) {
    for (var i = 0; i < encoded["lastColumn"].length; i++) {
      ps[pindex] = ps[pindex] || "";
      ps[pindex] = encoded["lastColumn"][i] + ps[pindex];
      pindex++;
    }
    pindex = 0;
    ps.sort(function (x, y) {
      return x.localeCompare(y);
    });
  }

  return ps[encoded['index']];
}

exports.rotate = rotate;
exports.encode = encode;
exports.decode = decode;
exports.sortedPermutations = sortedPermutations;
