'use strict';

var reactRegExp           = require('../reg-exp/react-reg-exp');

/**
 *
 *
 * @method splitHtml
 * @param  {String} _style  the string to parse
 * @return {array}          an array of the style properties
 */
module.exports = function( _str ) {

    var str = _str.split( reactRegExp() );

    return str;
};
