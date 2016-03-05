'use strict';

var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var expect      = require('chai').expect;


describe('Element RegExp', function() {

    var testCssClass = '.new {color: purple;background-color: green;}';
    var expected = [ '.new ', '{color: purple;background-color: green;}', '' ];

    it('Should split the string at "{" and "}"', function(){

        expect( testCssClass.split( utils.regExp.elementRegExp( '{','}' ) ) )
            .to.be.an('array')
            .to.eql( expected )
            .to.include('{color: purple;background-color: green;}');

    });

});


describe('react-style-reg-exp', function() {

});
