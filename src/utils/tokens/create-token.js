'use strict';

var getArrayOfClasses           = require('../markup/get-array-of-classes');
var getStyleProperties           = require('../markup/get-style-properties');
var classRegExp                 = require('../class-reg-exp');
var styleRegExp                 = require('../style-reg-exp');


module.exports = function( _chunk, _options, _index ) {

    var i = 0;
    var style = '';
    var hasStyle = false;
    var styleProperties = [];

    if( _chunk.split( styleRegExp() )[1] ){
        hasStyle = true;
        style = _chunk.split( styleRegExp() )[1];
        styleProperties = getStyleProperties( style );
    }

    var token = {
        index       : _index || 0,
        original    : _chunk,
        style       : {
            has_style   : hasStyle,
            original    : style,
            properties  : styleProperties
        },
        class       : {
            original    : _chunk.split( classRegExp() )[1],
            all         : getArrayOfClasses( _chunk.split( classRegExp() )[1] ),
            matches     : [],
            unmatched   : []
        }
    };


    for ( i = 0; i < token.class.all.length; i++) {
        if( token.class.all[ i ].includes( _options.hook ) ){
            token.class.matches.push( token.class.all[ i ] );
        }else{
            token.class.unmatched.push( token.class.all[ i ] );
        }
    }

    return token;
};
