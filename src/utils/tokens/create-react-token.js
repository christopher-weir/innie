'use strict';

var getReactArrayOfClasses      = require('../markup/get-react-array-of-classes');
var getReactStyleProperties     = require('../markup/get-react-style-properties');
var getReactOrigionalClasses    = require('../markup/get-react-origional-classes');
var reactClassRegExp            = require('../reg-exp/react-class-reg-exp');
var reactStyleRegExp            = require('../reg-exp/react-style-reg-exp');


module.exports = function( _chunk, _options, _index ) {

    var i               = 0;
    var style           = '';
    var hasStyle        = false;
    var styleProperties = [];

    var chunk = _chunk;
    var chunkSplit = chunk.split( reactStyleRegExp() )[1];
    var chunkClasses = getReactOrigionalClasses( chunk );

    if( chunkSplit ){
        hasStyle = true;
        style = chunkSplit;
        styleProperties = getReactStyleProperties( style );
    }

    var token = {
        index       : _index || 0,
        original    : chunk,
        style       : {
            has_style   : hasStyle,
            original    : style,
            properties  : styleProperties,
            compiled    : ''
        },
        class       : {
            original    : chunkClasses,
            all         : getReactArrayOfClasses( chunkClasses ),
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
