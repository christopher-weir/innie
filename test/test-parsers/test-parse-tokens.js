'use strict';

var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var parsers     = require('../../src/parsers');
var expect      = require('chai').expect;


describe('Create Token Util', function(){

    var testBasicElement = '<div class="blah blah-blah  className #testInnie">';

    it('Should return an object', function(){

        expect( utils.createToken( testBasicElement ) )
            .to.be.an('object');
    });

    it('Has property original and it is a string', function(){

        expect( utils.createToken( testBasicElement ) )
            .to.have.property('original')
            .to.be.a('string');
    });

    it('Has property matches and it is an array', function(){

        expect( utils.createToken( testBasicElement ) )
            .to.have.property('matches')
            .to.be.an('array');
    });

});
