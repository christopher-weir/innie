'use strict';

var utils           = require('../utils');

/**
 * Parses the given document and creates tokens that can be used later when
 * compiling the file.
 * @method function
 * @param  {String} _source  The origional source
 * @param  {Object} _options The options object
 * @return {Object}          The tokens object
 */
module.exports = function( _tokens, _options ) {

    var options = _options;

    var i = 0;
    var e = 0;
    // the tokens we are to update
    var tokens = [];
    var stack = [];


    /*!
    * Loop over the source, split via the tag/var/comment regular expression splitter.
    * Send each chunk to the appropriate parser.
    */
    utils.each( _tokens.split_source, function ( _chunk ) {

        // check if the chunk has a class attr to parse
        // if not return
        var hasClass = _chunk.includes('class="');

        if (!_chunk || !hasClass) {
            e++;
            return;
        }

        // create the token for the chunk containing a class
        tokens.push( utils.createToken( _chunk, options, e ) );
        e++;
    });

    return tokens;
};
