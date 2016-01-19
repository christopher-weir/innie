'use strict';

var cssClassRegExp          = require('../reg-exp/css-class-reg-exp');


module.exports = function( _name, _src, _options ) {

    // utils.cssClassRegExp(  )
    var classAttr   = false;
    var name        = _name.replace( _options.hook, '');
    var splitArray  = _src.split( cssClassRegExp( name ) );

    if( splitArray[ 1 ] ){
        classAttr = splitArray[ 1 ];
    }

    return classAttr;
};
