'use strict';

module.exports = function( classProps ){
    var cleanProps = {};
    var i = 0;

    for ( i = 0; i < classProps.length; i++ ) {

        if( classProps[ i ] && classProps[ i ].includes(':') ){
            var key = classProps[ i ].split(':')[ 0 ].replace(/\s\s+/g, ' ');
            cleanProps[ key ] = {};
            cleanProps[ key ] = classProps[ i ].split(':')[ 1 ];
        }
    }

    return cleanProps;
};
