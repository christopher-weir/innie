'use strict';
var mergeCompiledProps  = require('./merge-compiled-props');
var createCleanProps    = require('./create-clean-props');


module.exports = function( _newProps, _oldProps, _options ) {

    var oldProps    = _oldProps || []; // props from the style attr
    var classProps  = oldProps.concat( _newProps );
    var options     = _options;

    var params = mergeCompiledProps( createCleanProps( classProps ), options );

    return params;
};
