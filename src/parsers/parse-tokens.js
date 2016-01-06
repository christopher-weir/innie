'use strict';

var utils = require('../utils');

var returnArrayOfClasses = function( _array ){
    // splits into: ['class="', 'classes', '"']
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
    var anyChar = '[\\s\\S]*?';

    // Split the template source based on class attrs
    // /(class="[\\s\\S]*?")/
    var classRegExp = new RegExp(
      '(class="' + anyChar + '")'
    );

    var styleRegExp = new RegExp(
      '(style="' + anyChar + '")'
    );

    var elementRegExp = new RegExp(
      '(<' + anyChar + '>)'
    );

    // split the doc into an array
    var splitSource = source.split( elementRegExp );

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
        var classes         = returnArrayOfClasses( originalString.split( classRegExp ) );
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
            style = originalString.split( styleRegExp )[1];
        }

        tokens.push({
            index       : e,
            original    : originalString,
            matches     : matches,
            style       : hasStyle,
            styleAttr   : style,
            classAttr   : 'class="' + unnededClasses + '"'
        });

        e++;
    });

    // for ( i = 0; i < tokens.length; i++) {
    //     console.log(tokens[i].index);
    //     splitSource[ tokens[i].index ] = tokens[i].newClass;
    // }
    // console.log('----------');
    // console.log(splitSource.join(' '));

    return {
        tokens: tokens,
        split_source: splitSource
    };
};
