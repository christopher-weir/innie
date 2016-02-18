'use strict';

var isArray;

module.exports = function( _array ) {
    return ( _array ) ? ( Object.prototype.toString.call(_array) === '[object Array]' ) : false;
};
