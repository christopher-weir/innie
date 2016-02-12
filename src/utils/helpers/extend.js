'use strict';

/**
 * Copy all of the properties in the source objects over to the destination
 * object, and return the destination object. It's in-order, so the last source
 * will override properties of the same name in previous arguments.
 * @param {...object} arguments
 * @return {object}
 */

module.exports = function(basepath, encoding) {
    var args = arguments;
    var target = args[0];
    var objs = (args.length > 1) ? Array.prototype.slice.call(args, 1) : [];
    var i = 0;
    var l = objs.length;
    var key;
    var obj;

    for (i; i < l; i += 1) {
        obj = objs[i] || {};
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                target[key] = obj[key];
            }
        }
    }
    return target;
};
