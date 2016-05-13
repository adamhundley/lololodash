var _ = require("lodash");

var sorter = function (things) {
    return _.reverse(_.sortBy(things, 'quantity'));
};


module.exports = sorter;
