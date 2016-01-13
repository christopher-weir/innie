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
    hook: '#',
    location: ''
};
var defaultInstance = null;


exports.Innie = function( _opts ) {

    utils.validateOptions( _opts );

    var self = this;

    this.options = utils.extend( defaultOptions, _opts || {});

    this.compileHtml = function( _file, _style ){
        publicMethods.compileHtml( _file, _style, self.options );
    };
};



defaultInstance         = new exports.Innie();
exports.options         = defaultInstance.options;
exports.compileHtml     = defaultInstance.compileHtml;
