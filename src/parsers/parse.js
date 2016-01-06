'use strict';

var utils = require('../utils');

var returnArrayOfClasses = function( _string ){
    // splits into: ['class="', 'classes', '"']
    var origional = _string.split('"');
    return origional[1].trim().split(/\s+/);
};

module.exports = function( _source ) {

    var source = _source.replace(/\r\n/g, '\n');

    var i = 0;
    var parent = null;
    var tokens = [];
    var blocks = {};
    var inRaw = false;
    var line = 1;
    var stack = [];
    var anyChar = '[\\s\\S]*?';
    // Split the template source based on class attrs
    // /(class="[\\s\\S]*?")/
    var classSplitter = new RegExp(
      '(class="' + anyChar + '")'
    );
    var splitSource = source.split(classSplitter);

    /*!
    * Loop over the source, split via the tag/var/comment regular expression splitter.
    * Send each chunk to the appropriate parser.
    */

    var e = 0;

    utils.each( splitSource, function ( _chunk ) {

        var isClass = _chunk.includes('class="');

        if (!_chunk || !isClass) {
            e++;
            return;
        }

        // only initialise vars if needed
        // save the origional string for later
        var origionalString = _chunk;
        var classes = returnArrayOfClasses( _chunk );

        var matches = [];
        var unnededClasses = '';

        for ( i = 0; i < classes.length; i++) {
            if( classes[ i ].includes('#') ){
                matches.push( classes[ i ] );
            }else{
                unnededClasses = unnededClasses + classes[ i ] + ' ';
            }
        }

        console.log('-------');
        console.log( matches );
        console.log( unnededClasses );
        console.log( origionalString );
        console.log('-------');
        tokens.push({
            index: e,
            newClass: 'class="' + unnededClasses + '"'
        });
        e++;
    });

    for ( i = 0; i < tokens.length; i++) {
        console.log(tokens[i].index);
        splitSource[ tokens[i].index ] = tokens[i].newClass;
    }
    console.log('----------');
    console.log(splitSource.join(' '));

    return {
        parent: parent,
        tokens: tokens,
        blocks: blocks
    };
};
