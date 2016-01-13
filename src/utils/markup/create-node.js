'use strict';

var elementRegExp           = require('../element-reg-exp');

module.exports = function( _token ) {

    var elementStart = _token.original.split( elementRegExp( '<',' ' ) );

    var newNode = String( elementStart[ 1 ] ).replace(/\s\s+/g, ' ');

    var _style = '';

    if( _token.style.has_style ){
        _style = ' style="' + _token.style.compiled + '"';
    }

    var _class = ' class="' + _token.class.unmatched.join(' ') + '"';



    var node = newNode + _class + _style + '>';

    return node;
};
