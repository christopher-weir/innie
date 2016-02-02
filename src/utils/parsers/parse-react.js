'use strict';

var utils           = require('../../utils');
var parseCss        = require('./parse-css');

module.exports = function( _tokens, _style, _options ) {

    var options = _options;
    var i       = 0;
    var tokens  = [];


    /*!
    * Loop over the source, split via the tag/var/comment regular expression splitter.
    * Send each chunk to the appropriate parser.
    */
    utils.each( _tokens.split_source, function ( _chunk ) {

        // check if the chunk is createElement and has className
        // if not return
        if (!_chunk || !_chunk.includes('className') ) {
            i++;
            return;
        }

        // create the token for the chunk containing a class
        tokens.push( utils.createReactToken( _chunk, options, i ) );
        i++;
    });

    tokens = parseCss( tokens, _style, options );

    return tokens;
};
