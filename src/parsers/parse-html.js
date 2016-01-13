'use strict';

var utils = require('../utils');

module.exports = function( _tokens ) {

    var i = 0;
    var tokens = _tokens.tokens;
    var original = _tokens.split_source;

    // loop through the tokens and replace the attributes when needed
    for ( i = 0; i < tokens.length; i++ ) {

        var cleanClass = utils.createNode( tokens[ i ] );
        original[ tokens[ i ].index ] = cleanClass;
    }

    // .replace(/\s\s+/g, ' ')
    return original.join(' ');
};
