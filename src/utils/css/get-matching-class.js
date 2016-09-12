'use strict';

var regExp          = require('../reg-exp');

/**
 * Using the class name parse the css source and find matching classes
 * return those class properties.
 * @method getMatchingClass
 * @param  {String} _name    The name of the innie class
 * @param  {String} _src     The css file to parse
 * @param  {Object} _options The innie options object
 * @return {String}          A string of the matching css classes properties
 */
module.exports = function( _name, _src, _options ) {

    var classProperties   = false;
    var name        = _name.replace( _options.hook, '');
    var splitArray  = _src.split( regExp.classCss( name ) );

    if( splitArray[ 1 ] ){
        classProperties = splitArray[ 1 ];
    }

    return classProperties;
};
