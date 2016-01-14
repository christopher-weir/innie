'use strict';

var utils = require('../utils');

// parse the given css to find any matching classes
// to the ones supplied
module.exports = function( _tokens, _source, _options ) {

    var i = 0;
    var ii = 0;
    var tokens  = _tokens.tokens;
    var options = _options;

    // clean out all the spacees
    var source = _source.replace(/\s\s+/g, '').replace(/\r?\n|\r/g, '');

    // loop through the tokens to find their styles in the css
    for ( i = 0; i < tokens.length; i++ ) {

        var matchingClass = utils.getMatchingClass( tokens[ i ].class.matches[ 0 ], source, options );

        if( matchingClass ){

            tokens[ i ].style.compiled = utils.mergeProps( utils.getClassProps( matchingClass ), tokens[ i ].style.properties );

        }
    }

    return tokens;
};
