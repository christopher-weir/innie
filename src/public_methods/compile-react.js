'use strict';

var loaders = require('../loaders');
var parsers = require('../parsers');
var utils   = require('../utils');
var path    = require('path');

// load up a file and
module.exports = function( _options ) {
    console.log('start');
    var options = _options;
    var loader  = loaders.fs();

    var file        = loader.load( options.file );
    var style       = loader.load( options.style );

    var name        = options.file_name || path.basename( options.file );
    var location    = options.location;
    var createHtml  = '';

    /**
     * The tokens object stores any usefull data for the creation of the
     * innie instance
     * @type {Object}
     */
    var tokens  = {
        tokens: [],
        split_source: utils.splitReact( file )
    };

    console.log(tokens);

    return new Promise(function( _resolve, _reject ){

        tokens.tokens  = parsers.parseReact( tokens, options );

        tokens.tokens  = parsers.parseCss( tokens, style, options );
        _resolve('saved');
        //createHtml = utils.createHtmlFile( tokens );

        // loaders.save( location + name, createHtml )
        //     .then(function( data ){
        //         _resolve('saved');
        //     });
    });
};
