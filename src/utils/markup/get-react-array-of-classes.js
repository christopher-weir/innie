'use strict';

/**
 * Splits the class attr and returns an array of the nodes classes
 * @method getArrayOfClasses
 * @param  {string} _string The raw class attr
 * @return {array}          the array of the classes on the node
 */
module.exports = function( _string ) {

    var classAttr = '';

    // split the string at "
    // should return something like [ 'class="', 'class-name', '"' ]
    classAttr = _string.split('"');

    // split the css classes
    classAttr = classAttr[1].trim().split(/\s+/);

    return classAttr;
};
