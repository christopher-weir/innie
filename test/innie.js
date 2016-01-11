var innie       = require('../src/innie');
var utils       = require('../src/utils');
var expect      = require('chai').expect;

describe('Innie Style Inliner:', function() {

    // test version
    describe('version', function () {
        it('is 0.0.1', function () {

            expect( innie.version ).to.equal('0.0.1');

        });
    });


    describe('Util Extend', function(){

        it('Should extend two objects', function(){

            var testObject01 = {
                key_01: 'test'
            };

            var testObject02 = {
                key_02: 'test'
            };

            expect( utils.extend( testObject01, testObject02 ) ).to.have.all
                .keys('key_01', 'key_02');

        });


        it('Should override the first object', function(){

            var testObject01 = {
                key_01: 'foo'
            };

            var testObject02 = {
                key_01: 'bar'
            };

            expect( utils.extend( testObject01, testObject02 ) )
                .to.have.property('key_01')
                .and.equal('bar');

        });


    });



});