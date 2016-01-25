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

    /**
     * The tokens object stores any usefull data for the creation of the
     * innie instance
     * @type {Object}
     */
    var tokens  = {
        tokens: [],
        split_source: utils.splitHtml( file )
    };

    return new Promise(function( _resolve, _reject ){

        tokens.tokens  = parsers.parseHtml( tokens, options );

        tokens.tokens  = parsers.parseCss( tokens, style, options );

        createHtml = utils.createHtmlFile( tokens );

        loaders.save( location + name, createHtml )
            .then(function( data ){
                _resolve('saved');
            });
    });
};
