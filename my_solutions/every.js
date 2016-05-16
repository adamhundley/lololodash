var _ = require("lodash");

var theEvery = function(collection) {
  var result = {hot: [], warm: []}

  function tempChecker (temperature) {
    return temperature > 19;
  };

  _.forEach(collection, function(key, value) {
    if (_.every(key, tempChecker)) {
      result.hot.push(value);
    } else if (_.some(key, tempChecker)) {
      result.warm.push(value);
    }
  });
  return result;
};


module.exports = theEvery;
