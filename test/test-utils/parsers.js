'use strict';

var innie = require('../../src/innie');
var parseCss = require('../../src/utils/parsers/parse-css.js');
var expect = require('chai').expect;


describe('Parse Css', function() {

    var initial = [{
        'index': 17,
        'original': '<div class="class-name class-name-01 #replace-me">',
        'style': {
            'has_style': false,
            'original': '',
            'properties': [],
            'compiled': ''
        },
        'class': {
            'original': 'class="class-name class-name-01 #replace-me"',
            'all': ['class-name', 'class-name-01', '#replace-me'],
            'matches': ['#replace-me'],
            'unmatched': ['class-name', 'class-name-01']
        }
    }];

    var expected = [{
        'index': 17,
        'original': '<div class="class-name class-name-01 #replace-me">',
        'style': {
            'has_style': false,
            'original': '',
            'properties': [],
            'compiled': 'color: red; background-color: green;'
        },
        'class': {
            'original': 'class="class-name class-name-01 #replace-me"',
            'all': ['class-name', 'class-name-01', '#replace-me'],
            'matches': ['#replace-me'],
            'unmatched': ['class-name', 'class-name-01']
        }
    }];

    var style = '.replace-me {color: red;background-color: green;}';

    var options = {
        hook: '#',
        location: './',
        file_name: null,
        file: './test/index.html',
        type: '',
        style: './test/test.css'
    };


    it('Should be an array and matching', function() {

        expect( parseCss(initial, style, options) )
            .to.be.an('array')
            .to.eql( expected );

    });

});
