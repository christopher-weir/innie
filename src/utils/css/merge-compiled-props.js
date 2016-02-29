'use strict';

/**
 * mergeCompiledProps
 * Convert the object to a css string for the required options type
 * @method function
 * @param  {Object} cleanProps Cleaned props object
 * @param  {Object} options    The innie options
 * @return {string}            The compiled css string
 */
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

    // remove the last ',' if it exists
    if( params.slice( -1 ) === ',' ){
        params = params.slice( 0, -1 );
    }

    return params;
};
