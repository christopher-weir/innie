'use strict';

module.exports = function( cleanProps, options ){

    var params = '';

    for (var _key in cleanProps) {

        switch ( options.type ) {
            case 'react':
                params = params + '\'' + _key + '\':' + '\'' + cleanProps[ _key ].trim() + '\',';
                break;
            default:
                params = params + _key + ':' + cleanProps[ _key ] + '; ';
        }
    }
    // clean out any whitespace on the ends
    params = params.trim();

    // remove the last , if it exists
    if( params.slice( -1 ) === ',' ){
        params = params.slice( 0, -1 );
    }

    return params;
};
