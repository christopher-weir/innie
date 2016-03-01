'use strict';

var cssClassRegExp          = require('../reg-exp/css-class-reg-exp');
var elementRegExp           = require('../reg-exp/element-reg-exp');

/**
 * Taking the css class split it and return an array of its properties
 * @method function
 * @param  {String} _class The css class as a String
 * @return {array}        An array of the css properties
 */
module.exports = function( _class ) {

    var classProps      = [];
    var styleToAdd      = _class.split( elementRegExp( '{','}' ) );

    classProps = styleToAdd[ 1 ].replace(/(\r\n|\n|\r|[{}])/gm,'').split(';');

    return classProps;
};
