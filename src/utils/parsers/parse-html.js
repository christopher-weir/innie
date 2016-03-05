'use strict';

var each            = require('../helpers/each');
var createToken     = require('../tokens/create-token');
var parseCss        = require('./parse-css');

module.exports = function( _src, _style, _options ) {

    var options = _options;
    var i       = 0;
    var tokens  = [];

    each( _src, function ( _chunk ) {

        // check if the chunk has a class attr to parse
        // if not return
        if (!_chunk || !_chunk.includes('class="')) {
            i++;
            return;
        }

        // create the token for the chunk containing a class
        tokens.push( createToken( _chunk, options, i ) );
        i++;
    });

    tokens = parseCss( tokens, _style, options );
    return tokens;
};
