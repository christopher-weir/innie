'use strict';

var utils           = require('../../utils');
var parseCss        = require('./parse-css');

module.exports = function( _src, _style, _options ) {

    var i       = 0;
    var tokens  = [];
    var options = _options;

    utils.each( _src, function ( _chunk ) {

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
