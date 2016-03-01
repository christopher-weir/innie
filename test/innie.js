'use strict';

var innie       = require('../src/innie');
var utils       = require('../src/utils');
var expect      = require('chai').expect;


function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}


describe('Innie Style Inliner:', function() {

    // test version
    describe('Version', function () {
        it('is 0.0.1', function () {

            expect( innie.version ).to.equal('0.0.1');

        });
    });


    describe('Util', function(){

        importTest('Helpers', './test-utils/helpers');

        importTest('Markup', './test-utils/markup');

        importTest('Css', './test-utils/css');

    });



});
