'use strict';

module.exports = function( _style ) {

    var i = 0;
    var styleSplit = _style.split(';');
    var properties = [];

    var anyChar     = '[\\s\\S]*?';
    var styleRegExp = new RegExp(
      '(style' + anyChar + '=' + anyChar + '")'
    );

    for ( i = 0; i < styleSplit.length; i++) {

        if( styleSplit[i] !== '"' ){

            properties.push( styleSplit[i].replace( styleRegExp, '') );

        }
    }
    console.log(properties);
    return _style;
};
