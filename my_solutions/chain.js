var _ = require("lodash");

var chainer = function(words) {
  return _.chain(words)
    .map(function(word){
      return word + 'chained';
    })
    .map(function(word) {
      return word.toUpperCase();
    })
    .sort()
  };


module.exports = chainer;
