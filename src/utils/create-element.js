'use strict';

/*!
 * Create and return a new element from the parsers tokens
 * @param  {Object} _token  the token object
 * @return {String} the new element
 */

module.exports = function( _token ) {

    var elementStart = _token.original.split( utils.elementRegExp( '<',' ' ) );
    console.log(elementStart[ 1 ]);

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
