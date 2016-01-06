'use strict';

var loaders = require('../loaders');
var parsers = require('../parsers');

// load up a file and
module.exports = function( _file, _style ) {

    var loader = loaders.fs();
    var file = loader.load( _file );

    parsers.parse( file );
};
