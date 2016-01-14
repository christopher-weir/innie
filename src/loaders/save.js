'use strict';

var utils   = require('../utils');
var fs      = require('fs');

/**
 * Save the new compiled file and return a promise
 * @method function
 * @param  {string} _path    the new files path
 * @param  {string} _file    the new file
 * @return {promise}
 */
module.exports = function( _path, _file ) {

    return new Promise(function( _resolve, _reject ){

        fs.writeFile( _path, _file, function( err ) {
            if( err ) {
                return _reject(err);
            }
            _resolve('saved');
        });
    });
};
