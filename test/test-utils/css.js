'use strict';

var innie = require('../../src/innie');
var utils = require('../../src/utils');

var expect = require('chai').expect;

var testPropsArray = ['color: red', 'font-size: 26px', 'margin-bottom: 1em !important', ''];
var testPropsObj = {
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
var testClass = '.test-class {opacity: 0.5;pointer-events: none;}';

describe('Create Clean Props: create-clean-props.js', function() {

    it('Should return an object', function() {

        expect(utils.css.createCleanProps(testPropsArray))
            .to.be.an('object');

    });

    it('Should be matching', function() {

        expect(utils.css.createCleanProps(testPropsArray))
            .to.have.all.keys('color', 'font-size', 'margin-bottom');

    });

});


describe('Merge Compiled Props: merge-compiled-props.js', function() {

    it('Should return a string and be eql', function() {

        expect(utils.css.mergeCompiledProps(testPropsObj, options))
            .to.be.a('string')
            .to.eql('\'color\':\'purple\',\'font-size\':\'26px\',\'margin-bottom\':\'1em !important\',\'background-color\':\'green\'');
    });

});


describe('Get Class Props: get-class-props.js', function() {

    it('Should return an array', function() {

        expect(utils.css.getClassProps(testClass))
            .to.be.an('array');
    });

});
