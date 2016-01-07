'use strict';

var utils = require('../utils');

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

            var styleToAdd = arraytest[1].split( utils.elementRegExp( '{','}' ) );
            tokens[ i ].styleToAdd = styleToAdd[ 1 ].replace(/(\r\n|\n|\r|[{}])/gm,'');

        }
    }

    return tokens;
};
