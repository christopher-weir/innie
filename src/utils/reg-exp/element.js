'use strict';

/*!
 * A helper to create an element regex
 * @param  {string} _prefix
 * @param  {string} _suffix
 * @return {RegExp}
 */

var anyChar = '[\\s\\S]*?';

module.exports = function( _prefix, _suffix ) {

    var elementRegExp = new RegExp(
      '(' + _prefix + anyChar + _suffix + ')'
    );

    return elementRegExp;
};
