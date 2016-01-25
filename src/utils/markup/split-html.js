'use strict';

var elementRegExp           = require('../reg-exp/element-reg-exp');

/**
 *
 *
 * @method splitHtml
 * @param  {String} _style  the string to parse
 * @return {array}          an array of the style properties
 */
module.exports = function( _str ) {

    var str = _str.replace(/\r\n/g, '\n').split( elementRegExp( '<','>' ) );

    return str;
};