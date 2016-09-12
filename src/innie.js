'use strict';

var loaders = require('./utils/loaders');
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
    location: './',
    output: '',
    file_name: null,
    file: '',
    type: '',
    style: ''
};
var defaultInstance = null;


exports.Innie = function(_opts) {

    utils.helpers.validateOptions(_opts);

    var self = this;

    this.options = utils.helpers.extend(defaultOptions, _opts || {});

    this.compileHtml = function(_options) {

        var options = utils.helpers.extend(self.options, _options || {});

        return new Promise(
            function( _resolve, _reject ) {
                publicMethods
                    .compileHtml( options )
                    .then(function( data ) {
                        _resolve('saved');
                    })
                    .catch(function(reason) {
                        _reject(reason);
                    });
            }
        );

    };
};



defaultInstance = new exports.Innie();
exports.options = defaultInstance.options;
exports.compileHtml = defaultInstance.compileHtml;
exports.compileReact = defaultInstance.compileReact;
