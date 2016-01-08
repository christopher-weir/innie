'use strict';

var utils = require('../utils');

var mergeFilterArrays = function( _array ){
    var e = 0;

    var cleanArray = {};
    var params = '';

    for ( e = 0; e < _array.length; e++) {
        if( _array[e].includes(':') ){
            var key = _array[e].split(':')[ 0 ].replace(/\s\s+/g, ' ');
            cleanArray[ key ] = {};
            cleanArray[ key ] = _array[e].split(':')[ 1 ];
        }
    }

    for (var _key in cleanArray) {
        params = params + _key + cleanArray[ _key ] + '; ';
    }

    return params.trim();
};

module.exports = function( _tokens, _source, _options ) {

    var i = 0;
    var ii = 0;
    var tokens  = _tokens.tokens;
    var options = _options;
    // clean out all the spacees
    var source = _source.replace(/\s\s+/g, '');


    var createCssClassRegExp = function( _name ){

        var anyChar = '[\\s\\S]*?';

        return utils.elementRegExp( '.' + _name, '{'+ anyChar + '}' );
    };

    // loop through the tokens to find their styles in the css
    for ( i = 0; i < tokens.length; i++ ) {
        var arraytest = source.split( createCssClassRegExp( tokens[ i ].matches[ 0 ].replace( options.hook, '') ) );

        if( arraytest[1] ){

            var properties = [];
            var styleToAdd = arraytest[1].split( utils.elementRegExp( '{','}' ) );

            properties = styleToAdd[ 1 ].replace(/(\r\n|\n|\r|[{}])/gm,'').split(';');

            tokens[ i ].styleToAdd = mergeFilterArrays( properties.concat(tokens[ i ].styleProperties) );

            // tokens[ i ].styleProperties
            // properties
            // = tokens[ i ].styleToAdd
        }
    }

    return tokens;
};
