'use strict';

var loaders = require('./loaders');
var utils = require('./utils');
var publicMethods = require('./public_methods');



/**
 * Innie Options Object.
 * This object can be passed to many of the API-level Innie methods to control
 * various aspects of the engine. All keys are optional.
 * @typedef {Object} InnieOptions
 * @property {String} hook What the app looks for as the prefix to the replacement
 */
var defaultOptions = {
    hook: '#'
};

var defaultInstance;

/**
 * Compile a source file into a renderable template function.
 */
// var compileFile = function(_pathname, _options, _cb) {
//     console.log(_pathname);
//     console.log('test compile file inna');
// };

exports.Innie = function( _opts ) {

    this.options = defaultOptions;

    var self = this;

    this.compileHtml = function( _file, _style ){
        publicMethods.compileHtml( _file, _style, self.options );
        return;
    };
};



defaultInstance = new exports.Innie();
exports.options = defaultInstance.options;
exports.compileHtml = defaultInstance.compileHtml;
