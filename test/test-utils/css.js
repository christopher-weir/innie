'use strict';

var innie = require('../../src/innie');
var utils = require('../../src/utils');

var expect = require('chai').expect;


describe('Create Clean Props: create-clean-props.js', function() {

    var testProps = ['color: red', 'font-size: 26px', 'margin-bottom: 1em !important', ''];

    it('Should return an object', function() {

        expect(utils.css.createCleanProps(testProps))
            .to.be.an('object');

    });

    it('Should be matching', function() {

        expect(utils.css.createCleanProps(testProps))
            .to.have.all.keys('color', 'font-size', 'margin-bottom');

    });

});


describe('Merge Compiled Props: merge-compiled-props.js', function() {

    var testProps = {
        'color': ' purple',
        'font-size': '26px',
        'margin-bottom': '1em !important',
        'background-color': ' green'
    };

    var options = {
        hook: '#',
        location: './',
        file_name: null,
        file: 'test/react.js',
        type: 'react',
        style: 'test/style.css'
    };

    it('Should return a string and be eql', function() {

        expect(utils.css.mergeCompiledProps( testProps, options ))
            .to.be.a('string')
            .to.eql('\'color\':\'purple\',\'font-size\':\'26px\',\'margin-bottom\':\'1em !important\',\'background-color\':\'green\'');
    });

});
