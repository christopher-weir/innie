'use strict';

var loaders = require('../loaders');
var parsers = require('../parsers');
var utils   = require('../utils');
var path    = require('path');

// TODO remove, this is temporary
var fs = require('fs');

// load up a file and
module.exports = function( _file, _style, _options ) {

    var options = _options;
    var loader  = loaders.fs();

    var file        = loader.load( _file );
    var name        = options.file_name || path.basename( _file );
    var location    = options.location;

    var style       = loader.load( _style );

    var tokens  = {
        tokens: [],
        split_source: file.replace(/\r\n/g, '\n').split( utils.elementRegExp( '<','>' ) )
    };

    tokens.tokens  = parsers.parseHtml( tokens, options );

    tokens.tokens  = parsers.parseCss( tokens, style, options );

    var createHtml = utils.createHtmlFile( tokens );

    // just a test
    fs.writeFile( location + name, createHtml, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log('The file was saved!');
    });
};
