var innie       = require('../src/innie');
var utils       = require('../src/utils');
var expect      = require('chai').expect;

describe('Innie Style Inliner:', function() {

    // test version
    describe('Version', function () {
        it('is 0.0.1', function () {

            expect( innie.version ).to.equal('0.0.1');

        });
    });


    describe('Util', function(){

        describe('Extend', function(){

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


        describe('Get Style Properties', function(){

            var testStyleString = 'style = "display: block;width: 100%;height: 34px;"';

            it('Should return array', function(){

                expect( utils.getStyleProperties( testStyleString ) )
                    .to.be.an('array');

            });

        });


        describe('Get Array Of Classes', function(){

            var testClassStringNormal = 'class="blah blah-blad another classhaha #awefdddweaf"';
            var testClassStringEmpty = 'class=""';

            it('Should return array of classes', function(){

                expect( utils.getArrayOfClasses( testClassStringNormal ) )
                    .to.be.an('array');

            });

            it('Should work if class attr is empty', function(){

                expect( utils.getArrayOfClasses( testClassStringEmpty ) )
                    .to.be.an('array');

            });


        });



    });



});