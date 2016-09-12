'use strict';

var regExp           = require('../reg-exp');

/**
 *
 *
 * @method splitHtml
 * @param  {String} _style  the string to parse
 * @return {array}          an array of the style properties
 */
module.exports = function( _str ) {

    var str = _str.replace(/\r\n/g, '\n').split( regExp.element( '<','>' ) );

    return str;
};
