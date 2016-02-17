'use strict';

/**
 * Take the chunk string and find the className
 * @method function
 * @param  {[type]} _string [description]
 * @return {[type]}         [description]
 */
module.exports = function( _string ) {

    var i = 0;
    var anyChar     = '[\\s\\S]*?';
    var classNameRegExp = new RegExp(
      '(className:' + anyChar + '})'
    );

    var params = _string.split(classNameRegExp)[1].split(',');
    var className = '';

    for ( i = 0; i < params.length; i++) {
        if( params[ i ].indexOf('className') > -1 ){
            className = params[ i ];
            className = className.replace('}', '').trim();
        }
    }

    return className;
};
