var innie       = require('../src/innie');
var utils       = require('../src/utils');
var expect      = require('chai').expect;


function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
};


describe('Innie Style Inliner:', function() {

    // test version
    describe('Version', function () {
        it('is 0.0.1', function () {

            expect( innie.version ).to.equal('0.0.1');

        });
    });


    describe('Util', function(){

        importTest('Extend', './test-utils/test-extend');

        importTest('Get Style Properties', './test-utils/test-get-style-properties');

        importTest('Get Array Of Classes', './test-utils/test-get-array-of-classes');

    });



    describe('Parsers', function(){

        console.log('TODO test for the Parsers');
        //importTest('Parse Html', './test-parsers/test-parse-html');

    });



    describe('Public Methods', function(){

         console.log('TODO test for the public methods');


    });



});