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

/**
 * Parses the given document and creates tokens that can be used later when
 * compiling the file.
 * @method function
 * @param  {String} _source  The origional source
 * @param  {Object} _options The options object
 * @return {Object}          The tokens object
 */
module.exports = function( _source, _options ) {

    var source = _source.replace(/\r\n/g, '\n');
    var options = _options;

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

    var anyChar     = '[\\s\\S]*?';
    var styleRegExp = new RegExp(
      '(style' + anyChar + '=' + anyChar + '"' + anyChar + '")'
    );

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
        var hasStyle        = _chunk.includes('style');
        var style           = '';
        var styleProperties          = [];

        var matches = [];
        var unnededClasses = '';

        for ( i = 0; i < classes.length; i++) {
            if( classes[ i ].includes( options.hook ) ){
                matches.push( classes[ i ] );
            }else{
                unnededClasses = unnededClasses + classes[ i ] + ' ';
            }
        }

        if( hasStyle ){
            style = originalString.split( styleRegExp )[1];
            styleProperties = utils.getStyleProperties( style );
        }

        tokens.push({
            index           : e,
            original        : originalString,
            matches         : matches,
            style           : hasStyle,
            styleAttr       : style,
            styleProperties : styleProperties,
            classAttr       : 'class="' + unnededClasses.trim() + '"'
        });

        e++;
    });

    return {
        tokens: tokens,
        split_source: splitSource
    };
};
