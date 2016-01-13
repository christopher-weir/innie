'use strict';

var loaders = require('../loaders');
var parsers = require('../parsers');
var utils   = require('../utils');

// TODO remove, this is temporary
var fs = require('fs');

// load up a file and
module.exports = function( _file, _style, _options ) {

    var options = _options;
    var loader  = loaders.fs();

    var file    = loader.load( _file );
    var style   = loader.load( _style );



    // clean the source and spit it
    var source = file.replace(/\r\n/g, '\n');
    // the origional src
    var splitSource = source.split( utils.elementRegExp( '<','>' ) );

    var tokens  = {
        tokens: [],
        split_source: splitSource
    };

    tokens.tokens  = parsers.parseHtml( file, options );

    tokens.tokens  = parsers.parseCss( tokens, style, options );

    var createHtml = utils.createHtmlFile( tokens );

    // just a test
    fs.writeFile('./index.html', createHtml, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log('The file was saved!');
    });
};
