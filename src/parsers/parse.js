'use strict';

var utils = require('../utils');

module.exports = function( _source ) {

    var source = _source.replace(/\r\n/g, '\n');

    var parent = null;
    var tokens = null;
    var blocks = null;

    console.log( source );

    return {
        parent: parent,
        tokens: tokens,
        blocks: blocks
    };
};
