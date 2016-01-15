'use strict';

var loaders = require('./loaders');
var utils = require('./utils');
var publicMethods = require('./public_methods');

/**
 * innie version number as a string.
 */
exports.version = '0.0.1';


/**
 * Innie Options Object.
 * This object can be passed to many of the API-level Innie methods to control
 * various aspects of the engine. All keys are optional.
 * @typedef {Object} InnieOptions
 * @property {String} hook What the app looks for as the prefix to the replacement
 */
var defaultOptions = {
    hook        : '#',
    location    : './',
    file_name   : null,
    file        : '',
    style       : ''
};
var defaultInstance = null;


exports.Innie = function( _opts ) {

    utils.validateOptions( _opts );

    var self = this;

    this.options = utils.extend( defaultOptions, _opts || {});

    this.compileHtml = function( _options ){

        var options = utils.extend( self.options, _options || {});

        return new Promise(function( _resolve, _reject ){
            publicMethods.compileHtml( options )
                .then(function( data ){
                    _resolve('saved');
                });
        });

    };
};



defaultInstance         = new exports.Innie();
exports.options         = defaultInstance.options;
exports.compileHtml     = defaultInstance.compileHtml;
