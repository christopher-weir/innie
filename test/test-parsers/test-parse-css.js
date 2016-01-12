'use strict';

var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var parsers     = require('../../src/parsers');
var expect      = require('chai').expect;



describe('Css Parse Utils', function(){

    var testCss = '.class-01 {white-space: pre-wrap;text-align: center;}.class-01 p a {font-weight: 400 !important;color: #dc94c0 !important;}.class-01 p a:hover {text-decoration: underline !important;}.class-01 h1 {font-size: 26px;margin-bottom: 1em !important;}.test-class {opacity: 0.5;pointer-events: none;}';

    var testMatch = '#test-class';

    var testClass = '.test-class {opacity: 0.5;pointer-events: none;}';

    var testOptions = {
        hook: '#'
    };

    describe('Get Matching Class', function(){

        it('Should return a string and should be equil', function(){

            expect( utils.getMatchingClass( testMatch, testCss, testOptions )  )
                .to.be.a('string')
                .to.equal('.test-class {opacity: 0.5;pointer-events: none;}');
        });

    });

    describe('Get Class Props', function(){

        it('Should return an array', function(){

            expect( utils.getClassProps( testClass )  )
                .to.be.an('array');
        });

    });
});
