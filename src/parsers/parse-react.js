'use strict';

var utils           = require('../utils');

module.exports = function( _tokens, _options ) {

    var options = _options;
    var i       = 0;
    var tokens  = [];


    /*!
    * Loop over the source, split via the tag/var/comment regular expression splitter.
    * Send each chunk to the appropriate parser.
    */
    utils.each( _tokens.split_source, function ( _chunk ) {

        // check if the chunk has a class attr to parse
        // if not return
        var hasClass = _chunk.includes('React.createElement');

        if (!_chunk || !hasClass) {
            i++;
            return;
        }

        // create the token for the chunk containing a class
        tokens.push( utils.createReactToken( _chunk, options, i ) );
        i++;
    });
    console.log(tokens);
    return tokens;
};
