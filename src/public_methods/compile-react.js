'use strict';

var loaders = require('../utils/loaders');
var parsers = require('../utils/parsers');
var utils   = require('../utils');
var path    = require('path');

// load up a file and
module.exports = function( _options ) {

    var options = _options;
    var loader  = loaders.fs();

    var file        = loader.load( options.file );
    var style       = loader.load( options.style );

    var name        = options.file_name || path.basename( options.file );
    var location    = options.location;
    var source      = utils.splitReact( file );

    /**
     * The tokens object stores any usefull data for the creation of the
     * innie instance
     * @type {Object}
     */
    var tokens  = {
        tokens: parsers.parseReact( source, style, options ),
        split_source: source
    };

    var newReactFile = utils.createReactFile( tokens );

    return new Promise(function( _resolve, _reject ){

        loaders.save( location + name, newReactFile )
            .then(function( data ){
                _resolve('saved');
            });
    });
};
