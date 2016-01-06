'use strict';

/*!
 * Makes a string safe for a regular expression.
 * @param  {string} str
 * @return {string}
 * @private
 */

module.exports = function(str) {
    return str.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g, '\\$&');
};
