'use strict';

var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var patterns    = require('./test-patterns/markup.js');
var expect      = require('chai').expect;

describe('Create html file: create-html-file.js', function() {

});


describe('Create html node: create-html-node.js', function() {

    it('Should return a string', function(){

        expect( utils.createHtmlNode( patterns.htmlNodeToken() ) )
            .to.be.a('string');

    });

    it('Should be matching', function(){

        expect( utils.createHtmlNode( patterns.htmlNodeToken() ) )
            .to.be.a('string')
            .to.eql( patterns.htmlNodeTokenExpected() );

    });
});


describe('Create react node: create-react-node.js', function() {

    it('Should return a string', function(){

        expect( utils.createReactNode( patterns.reactNodeToken() ) )
            .to.be.a('string');

    });

    it('Should be matching', function(){

        expect( utils.createReactNode( patterns.reactNodeToken() ) )
            .to.be.a('string')
            .to.eql( patterns.reactNodeTokenExpected() );

    });
});
