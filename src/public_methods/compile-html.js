'use strict';

var loaders = require('../utils/loaders');
var parsers = require('../utils/parsers');
var utils = require('../utils');
var path = require('path');

// load up a file and
module.exports = function(_options) {

    var options = _options;
    var loader = loaders.fs();

    return new Promise(function(_resolve, _reject) {

        var file = null;
        var style = null;

        try {
            file = loader.load(options.file);
            style = loader.load(options.style);
        } catch (e) {
            _reject(e);
        }

        var name = options.file_name || path.basename(options.file);
        var location = options.location;
        var source = utils.markup.splitHtml(file);

        /**
         * The tokens object stores any usefull data for the creation of the
         * innie instance
         * @type {Object}
         */
        var tokens = {
            tokens: parsers.parseHtml(source, style, options),
            split_source: source
        };

        var createHtml = utils.markup.createHtmlFile(tokens);

        loaders.save(location + name, createHtml)
            .then(function(data) {
                _resolve('saved');
            });
    });
};
