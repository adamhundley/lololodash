var _ = require("lodash");

var commentCounter = function(collection) {
  return _.chain(collection)
  .groupBy('username')
  .map(function(comment, name){
    return {username: name, comment_count: _.size(comment)};
  })
  .sortBy(function(collection){
    return -collection['comment_count'];
  })
  };


module.exports = commentCounter;
