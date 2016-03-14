'use strict';

var innie = require('../../src/innie');
var utils = require('../../src/utils');
var expect = require('chai').expect;


describe('Html Token', function() {

    var testToken = '<div class="blah blahclasshaha #awefaaaaweaf" style = "display: block;width: 100%;height: 34px;">';
    var option = {
        hook: '#',
        location: './',
        file_name: null,
        file: 'test/index.html',
        type: '',
        style: 'test/style.css'
    };
    var index = 21;
    var tokenRes = {
        index: 21,
        original: '<div class="blah blahclasshaha #awefaaaaweaf" style = "display: block;width: 100%;height: 34px;">',
        style: {
            has_style: true,
            original: 'style = "display: block;width: 100%;height: 34px;"',
            properties: ['display: block', 'width: 100%', 'height: 34px'],
            compiled: ''
        },
        class: {
            original: 'class="blah blahclasshaha #awefaaaaweaf"',
                all: ['blah', 'blahclasshaha', '#awefaaaaweaf'],
                matches: ['#awefaaaaweaf'],
                unmatched: ['blah', 'blahclasshaha']
        }
    };

    it('Should return an Object and be matching', function(){

        expect( utils.tokens.createToken( testToken, option, index ) )
            .to.be.an('object')
            .to.eql( tokenRes );

    });


});
