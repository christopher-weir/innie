'use strict';

module.exports = function( _string ) {


    var classAttr = '';

    classAttr = _string.split('"');

    classAttr = classAttr[1].trim().split(/\s+/);

    return classAttr;
};