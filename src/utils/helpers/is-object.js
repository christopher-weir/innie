'use strict';

module.exports = function(obj) {
    return (obj) ? ( obj !== null && typeof obj === 'object' ) : false;
};
