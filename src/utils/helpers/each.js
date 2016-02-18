'use strict';
var isObject = require('./is-object');

/**
 * Iterate over an array or object.
 * @param  {array|object} obj Enumerable object.
 * @param  {Function}     fn  Callback function executed for each item.
 * @return {array|object}     The original input object.
 */
module.exports = function(obj, fn) {
    var i, l;

    if (isObject(obj)) {
        i = 0;
        l = obj.length;
        for (i; i < l; i += 1) {
            if (fn(obj[i], i, obj) === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            if (obj.hasOwnProperty(i)) {
                if (fn(obj[i], i, obj) === false) {
                    break;
                }
            }
        }
    }

    return obj;
};
