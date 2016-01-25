'use strict';

/*!
 * A helper to create an element regex
 * @param  {string} _prefix
 * @param  {string} _suffix
 * @return {RegExp}
 */
module.exports = function( ) {
    var anyChar     = '[\\s\\S]*?';
    var styleRegExp = new RegExp(
      '(className:' + anyChar + '"' + anyChar + '")'
    );

    return styleRegExp;
};
