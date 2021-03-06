'use strict';

var getArrayOfClasses           = require('../markup/get-array-of-classes');
var getStyleProperties          = require('../markup/get-style-properties');
var regExp                      = require('../reg-exp');

module.exports = function( _chunk, _options, _index ) {

    var i = 0;
    var style = '';
    var hasStyle = false;
    var styleProperties = [];

    if( _chunk.split( regExp.style() )[1] ){
        hasStyle = true;
        style = _chunk.split( regExp.style() )[1];
        styleProperties = getStyleProperties( style );
    }

    var token = {
        index       : _index || 0,
        original    : _chunk,
        style       : {
            has_style   : hasStyle,
            original    : style,
            properties  : styleProperties,
            compiled    : ''
        },
        class       : {
            original    : _chunk.split( regExp.classHtml() )[1],
            all         : getArrayOfClasses( _chunk.split( regExp.classHtml() )[1] ),
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
