'use strict';

var utils = require('../utils');

module.exports = function( _tokens ) {

    var i = 0;
    var tokens = _tokens.tokens;
    var original = _tokens.split_source;

    var addStyle = function( _style ){
        var style = '';
        if( _style ){
            style = ' style="' + _style + '" ';
        }
        return style;
    };

    // TODO refactor
    // extend to utils
    var createNode = function( _token ){

        var elementStart = _token.original.split( utils.elementRegExp( '<',' ' ) );

        var nodeArray = _token.original.split( utils.elementRegExp( 'class="','"' ) );

        var classAttr = elementStart[ 2 ].split( utils.elementRegExp( 'class="','"' ) );

        var styleAttr = '';

        if( _token.style ){
            styleAttr = classAttr[ 2 ].split( _token.styleAttr );
        }

        var elementEnd = '';

        var style = addStyle( _token.styleToAdd );

        var newNode = String( elementStart[ 1 ] + _token.classAttr + style ).replace(/\s\s+/g, ' ');

        console.log(newNode);

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
