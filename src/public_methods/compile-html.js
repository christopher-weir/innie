'use strict';

var loaders = require('../loaders');
var parsers = require('../parsers');
var utils   = require('../utils');
var path    = require('path');

// load up a file and
module.exports = function( _options ) {

    var options = _options;
    var loader  = loaders.fs();

    var file        = loader.load( options.file );
    var name        = options.file_name || path.basename( options.file );
    var location    = options.location;
    var createHtml  = '';

    var style       = loader.load( options.style );

    var tokens  = {
        tokens: [],
        split_source: file.replace(/\r\n/g, '\n').split( utils.elementRegExp( '<','>' ) )
    };

    tokens.tokens  = parsers.parseHtml( tokens, options );

    tokens.tokens  = parsers.parseCss( tokens, style, options );

    createHtml = utils.createHtmlFile( tokens );

    loaders.save( location + name, createHtml ).then(function( data ){
        console.log(data);
    });
};
