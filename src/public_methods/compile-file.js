'use strict';

var loaders = require('../loaders');
var parsers = require('../parsers');

var fs = require('fs');

// load up a file and
module.exports = function( _file, _style ) {

    var loader  = loaders.fs();
    var file    = loader.load( _file );
    var style   = loader.load( _style );
    var tokens  = parsers.parseTokens( file );

    tokens.tokens  = parsers.parseStyles( tokens, style );

    var cleanDocument = parsers.cleanDocument( tokens );

    // console.log(cleanDocument);

    // just a test
    fs.writeFile('./index.html', cleanDocument, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log('The file was saved!');
    });
};
