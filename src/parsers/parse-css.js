'use strict';

var utils = require('../utils');

/**
 * parse the given css to find any matching classes to the ones supplied.
 * @method parseCss
 * @param  {Object} _tokens  The innie compile token object
 * @param  {String} _source  The css source file
 * @param  {Object} _options The innie options object
 * @return {Object}          Returns the compiled and updated innie token object
 */
module.exports = function( _tokens, _source, _options ) {

    var i = 0;
    var tokens  = _tokens;
    var options = _options;

    // clean out all the double spaces and whitespace
    var source = _source.replace(/\s\s+/g, '').replace(/\r?\n|\r/g, '');

    // loop through the tokens to find their styles in the css
    for ( i = 0; i < tokens.length; i++ ) {

        // find any matching classes
        var matchingClass = utils.getMatchingClass( tokens[ i ].class.matches[ 0 ], source, options );

        if( matchingClass ){
            tokens[ i ].style.compiled = utils.mergeProps( utils.getClassProps( matchingClass ), tokens[ i ].style.properties, options );
        }
    }

    return tokens;
};
