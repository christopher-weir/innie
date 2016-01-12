'use strict';

/*!
 * @return {RegExp}
 */

module.exports = function( _name ) {

    var anyChar     = '[\\s\\S]*?';

    var classRegExp = new RegExp(
      '(.' + _name + anyChar + '{'+ anyChar + '})'
    );

    return classRegExp;
};
