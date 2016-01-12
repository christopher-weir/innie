'use strict';

/*!
 * A helper to create an element regex
 * @param  {string} _prefix
 * @param  {string} _suffix
 * @return {RegExp}
 */

var anyChar     = '[\\s\\S]*?';

module.exports = function( ) {

    var styleRegExp = new RegExp(
      '(class' + anyChar + '=' + anyChar + '"' + anyChar + '")'
    );

    return styleRegExp;
};
