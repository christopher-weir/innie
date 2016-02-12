'use strict';

var isArray;

module.exports = function(obj) {
    return (obj) ? (typeof obj === 'object' && Object.prototype.toString.call(obj).indexOf() !== -1) : false;
};
