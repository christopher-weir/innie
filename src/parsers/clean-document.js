'use strict';

var utils = require('../utils');

module.exports = function( _tokens ) {

    var i = 0;
    var tokens = _tokens.tokens;
    var original = _tokens.split_source;
    var anyChar = '[\\s\\S]*?';

    var classRegExp = new RegExp(
      '(class="' + anyChar + '")'
    );

    var styleRegExp = new RegExp(
      '(style="' + anyChar + '")'
    );

    var addStyle = function( _style ){
        var style = '';
        if( _style ){
            style = ' style="' + _style + '" ';
        }
        return style;
    };

    var createNode = function( _token ){
        var nodeArray = _token.original.split( classRegExp );

        var style = addStyle( _token.styleToAdd );

        return String( nodeArray[ 0 ] + _token.classAttr + style + nodeArray[ 2 ] ).replace(/\s\s+/g, ' ');
    };

    // loop through the tokens and replace the attributes when needed
    for ( i = 0; i < tokens.length; i++ ) {

        var cleanClass = createNode( tokens[ i ] );
        original[ tokens[ i ].index ] = cleanClass;
    }

    // .replace(/\s\s+/g, ' ')
    return original.join(' ');
};
