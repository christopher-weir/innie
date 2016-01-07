'use strict';

var utils = require('../utils');

var returnArrayOfClasses = function( _array ){

    var i = 0;
    var classAttr = '';

    for ( i = 0; i < _array.length; i++) {
        if( _array[ i ].includes('class="') ){
            classAttr = _array[ i ];
        }
    }
    classAttr = classAttr.split('"');
    return classAttr[1].trim().split(/\s+/);
};

module.exports = function( _source ) {

    var source = _source.replace(/\r\n/g, '\n');

    var i = 0;
    var tokens = [];
    var stack = [];

    // split the doc into an array
    var splitSource = source.split( utils.elementRegExp( '<','>' ) );

    /*!
    * Loop over the source, split via the tag/var/comment regular expression splitter.
    * Send each chunk to the appropriate parser.
    */

    var e = 0;

    utils.each( splitSource, function ( _chunk ) {

        var hasClass = _chunk.includes('class="');

        if (!_chunk || !hasClass) {
            e++;
            return;
        }

        // only initialise vars if needed
        // save the original string for later
        var originalString = _chunk;
        var classes         = returnArrayOfClasses( originalString.split( utils.elementRegExp( 'class="','"' ) ) );
        var hasStyle        = _chunk.includes('style="');
        var style           = '';

        var matches = [];
        var unnededClasses = '';

        for ( i = 0; i < classes.length; i++) {
            if( classes[ i ].includes('#') ){
                matches.push( classes[ i ] );
            }else{
                unnededClasses = unnededClasses + classes[ i ] + ' ';
            }
        }

        if( hasStyle ){
            style = originalString.split( utils.elementRegExp( 'style="','"' ) )[1];
        }

        tokens.push({
            index       : e,
            original    : originalString,
            matches     : matches,
            style       : hasStyle,
            styleAttr   : style,
            classAttr   : 'class="' + unnededClasses.trim() + '"'
        });

        e++;
    });

    return {
        tokens: tokens,
        split_source: splitSource
    };
};
