'use strict';


var each            = require('../helpers/each');
var createReactToken    = require('../tokens/create-react-token');
var parseCss        = require('./parse-css');

module.exports = function( _src, _style, _options ) {

    var i       = 0;
    var tokens  = [];
    var options = _options;

    each( _src, function ( _chunk ) {

        // check if the chunk is createElement and has className
        // if not return
        if (!_chunk || !_chunk.includes('className') ) {
            i++;
            return;
        }

        // create the token for the chunk containing a class
        tokens.push( createReactToken( _chunk, options, i ) );
        i++;
    });

    tokens = parseCss( tokens, _style, options );

    return tokens;
};
