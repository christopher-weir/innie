'use strict';

var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var parsers     = require('../../src/parsers');
var expect      = require('chai').expect;



describe('Css Parse Utils', function(){

    var testCss = '.class-01 {white-space: pre-wrap;text-align: center;}.class-01 p a {font-weight: 400 !important;color: #dc94c0 !important;}.class-01 p a:hover {text-decoration: underline !important;}.class-01 h1 {font-size: 26px;margin-bottom: 1em !important;}.test-class {opacity: 0.5;pointer-events: none;}';

    var testMatch = '#test-class';

    var testClass = '.test-class {opacity: 0.5;pointer-events: none;}';

    var testProps = [ 'opacity: 0.5', 'pointer-events: all', '', 'display: none' ];
    var testProps2 = [ 'opacity: 0.5', 'pointer-events: none', 'text-decoration: underline !important', 'display: block' ];

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

    // describe('mergeProps', function(){
    //
    //     it('Should return a string and be equal, new prop shoulkd override the old', function(){
    //
    //         expect( utils.mergeProps( testProps, testProps2 )  )
    //             .to.be.a('string')
    //             .to.equal('opacity: 0.5; pointer-events: all; text-decoration: underline !important; display: none;');
    //     });
    //
    // });


});
