'use strict';


module.exports = function( _newProps, _oldProps ) {

    var i = 0;
    var oldProps    = _oldProps || []; // props from the style attr
    var classProps  = oldProps.concat( _newProps );

    var cleanProps = {};
    var params = '';

    for ( i = 0; i < classProps.length; i++ ) {

        if( classProps[ i ] && classProps[ i ].includes(':') ){
            var key = classProps[ i ].split(':')[ 0 ].replace(/\s\s+/g, ' ');
            cleanProps[ key ] = {};
            cleanProps[ key ] = classProps[ i ].split(':')[ 1 ];
        }
    }

    for (var _key in cleanProps) {
        params = params + _key + ':' + cleanProps[ _key ] + '; ';
    }

    return params.trim();
};
