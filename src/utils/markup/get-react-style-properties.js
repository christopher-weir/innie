'use strict';

/**
 * Splits the style attr and returns an array of the nodes origional style
 * properties
 * @method getStyleProperties
 * @param  {String} _style  the string to parse
 * @return {array}          an array of the style properties
 */
module.exports = function( _style ) {

    var i = 0;

    var styleSplit = _style.split(new RegExp('({[\\s\\S]*?})'));
    styleSplit = styleSplit[ 1 ].replace(/[{}]+/g, '').split(',');

    var properties = [];

    for ( i = 0; i < styleSplit.length; i++) {

        if( styleSplit[i] !== '"' ){
            properties.push( styleSplit[i].replace(/[']+/g, '').trim() );

        }
    }

    return properties;
};
