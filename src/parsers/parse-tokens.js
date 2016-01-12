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
module.exports = function( _source, _options ) {

    var options = _options;

    var i = 0;
    var e = 0;
    // the tokens we are to update
    var tokens = [];
    var stack = [];

    // clean the source and spit it
    var source = _source.replace(/\r\n/g, '\n');
    // the origional src
    var splitSource = source.split( utils.elementRegExp( '<','>' ) );


    /*!
    * Loop over the source, split via the tag/var/comment regular expression splitter.
    * Send each chunk to the appropriate parser.
    */
    utils.each( splitSource, function ( _chunk ) {

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

    return {
        tokens: tokens,
        split_source: splitSource
    };
};
