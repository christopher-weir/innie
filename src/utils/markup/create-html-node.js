'use strict';

var elementRegExp           = require('../element-reg-exp');

/**
 * Creates a new node using the token object
 * @method createNode
 * @param  {object} _token The token object
 * @return {string}        The compiled node string
 */
module.exports = function( _token ) {

    // find the type of element eg '<div', '<article' etc
    var elementStart = String(  _token.original.split( elementRegExp( '<',' ' ) )[ 1 ] ).replace(/\s\s+/g, ' ');

    var _style = ' style="' + _token.style.compiled + '"';

    // add the unmatched classes back to the element
    var _class = ' class="' + _token.class.unmatched.join(' ') + '"';

    // create the new node
    var node = elementStart + _class + _style + '>';

    return node;
};
