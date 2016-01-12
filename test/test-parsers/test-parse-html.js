var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var parsers     = require('../../src/parsers');
var expect      = require('chai').expect;



it('Should extend two objects', function(){

    var htmlSrc = '<div class="blah blah-blad  classhaha #awefweaf"></div><div class="blah blahclasshaha #awefaaaaweaf" style = "display: block;width: 100%;height: 34px;"></div>'

    var tokens = {
        tokens: [{
            index: 1,
            original: '<div class="blah blah-blad  classhaha #awefweaf">',
            //matches: [Object],
            style: false,
            styleAttr: '',
            styleProperties: [],
            classAttr: 'class="blah blah-blad classhaha"',
            styleToAdd: 'color red; background-color green;'
        }, {
            index: 5,
            original: '<div class="blah blahclasshaha #awefaaaaweaf" style = "display: block;width: 100%;height: 34px;">',
            //matches: [Object],
            style: true,
            styleAttr: 'style = "display: block;width: 100%;height: 34px;"',
            //styleProperties: [Object],
            classAttr: 'class="blah blahclasshaha"'
        }],
        split_source: ['',
            '<div class="blah blah-blad classhaha" style="color red; background-color green;" >',
            '',
            '</div>',
            '',
            '<div class="blah blahclasshaha" style = "display: block;width: 100%;height: 34px;">',
            '',
            '</div>',
            ''
        ]
    };

});


