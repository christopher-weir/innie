'use strict';

var loaders = require('../loaders');
var parsers = require('../parsers');

// TODO remove, this is temporary
var fs = require('fs');

// load up a file and
module.exports = function( _file, _style, _options ) {

    var options = _options;
    var loader  = loaders.fs();
    var file    = loader.load( _file );
    var style   = loader.load( _style );

    var tokens  = parsers.parseTokens( file, options );

    tokens.tokens  = parsers.parseCss( tokens, style, options );
    console.log( tokens.tokens );

    var parseHtml = parsers.parseHtml( tokens );

    // just a test
    fs.writeFile('./index.html', parseHtml, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log('The file was saved!');
    });
};
