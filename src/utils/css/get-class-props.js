'use strict';

var cssClassRegExp          = require('../css-class-reg-exp');
var elementRegExp           = require('../element-reg-exp');


module.exports = function( _class ) {


    var classProps      = [];
    var styleToAdd      = _class.split( elementRegExp( '{','}' ) );

    classProps = styleToAdd[ 1 ].replace(/(\r\n|\n|\r|[{}])/gm,'').split(';');

    return classProps;
};
