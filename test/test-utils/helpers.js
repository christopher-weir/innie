'use strict';

var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var expect      = require('chai').expect;

describe('Extend', function() {

    var testObject1 = {
        key_01: 'testObject1 key_01',
        key_02: 'testObject1 key_02'
    };
    var testObject2 = {
        key_01: 'testObject2 key_01'
    };


    it('Should return an Object', function(){

        expect( utils.extend( testObject1, testObject2 ) )
            .to.be.an('object');

    });

    it('Should extend the two Objects with the second overriding the first', function(){

        expect( utils.extend( testObject1, testObject2 ) )
            .to.have.all.keys('key_01', 'key_02')
            .to.have.property('key_01')
                .and.equal('testObject2 key_01');

    });

});