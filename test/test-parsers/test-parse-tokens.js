'use strict';

var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var parsers     = require('../../src/parsers');
var expect      = require('chai').expect;


describe('Create Token Util', function(){

    var testBasicOptions = {
        hook: '#'
    };

    var testBasicElement = '<div class="blah blah-blah  className #testInnie">';
    var testStyleElement = '<div class="blah blah-blah  className #testInnie" style = "display: block;width: 100%;height: 34px;">';

    it('Should return an object', function(){

        expect( utils.createToken( testBasicElement, testBasicOptions, 0 )  )
            .to.be.an('object');
    });

    describe('Check returned object', function(){

        it('Has property original and it is a string', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 )  )
                .to.have.property('original')
                .to.be.a('string');
        });

        it('Has property index and it is a number', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 ) )
                .to.have.property('index')
                .to.be.a('number');
        });

        it('Has property style and it is an object', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 )  )
                .to.have.property('style')
                .to.be.an('object');
        });


        it('Has property style.original and it is a string', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 )  )
                .to.have.deep.property('style.original')
                .to.be.a('string');
        });


        it('Has property style.properties and it is an array', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 )  )
                .to.have.deep.property('style.properties')
                .to.be.an('array');
        });


        it('Has property class and it is an object', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 )  )
                .to.have.property('class')
                .to.be.an('object');
        });


        it('Has property class.original and it is a string', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 )  )
                .to.have.deep.property('class.original')
                .to.be.a('string');
        });


        it('Has property class.all and it is an array', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 )  )
                .to.have.deep.property('class.all')
                .to.be.an('array');
        });


        it('Has property class.matches and it is an array', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 )  )
                .to.have.deep.property('class.matches')
                .to.be.an('array');
        });


        it('Has property class.unmatched and it is an array', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 )  )
                .to.have.deep.property('class.unmatched')
                .to.be.an('array');
        });
    });


    describe('Check Class Properties', function(){

        it('class.original should be equil', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 ) )
                .to.have.deep.property('class.original')
                .to.eql('class="blah blah-blah  className #testInnie"');
        });

        it('class.all should have a length of 4', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 ) )
                .to.have.deep.property('class.all')
                .to.have.length(4);
        });

        it('class.matches should have a length of 1 and equil "[ \'#testInnie\' ]"', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 ) )
                .to.have.deep.property('class.matches')
                .to.have.length(1)
                .to.eql([ '#testInnie' ]);
        });

        it('class.unmatched should have a length of 3 and equil "[ \'blah\', \'blah-blah\', \'className\' ]"', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 ) )
                .to.have.deep.property('class.unmatched')
                .to.have.length(3)
                .to.eql([ 'blah', 'blah-blah', 'className' ]);
        });


    });


    describe('Check Style Properties', function(){


        it('style.has_style should be false if style not present', function(){

            expect( utils.createToken( testBasicElement, testBasicOptions, 0 ) )
                .to.have.deep.property('style.has_style')
                .to.be.a('boolean')
                .to.equal(false);
        });

        it('style.has_style should be true', function(){

            expect( utils.createToken( testStyleElement, testBasicOptions, 0 ) )
                .to.have.deep.property('style.has_style')
                .to.be.a('boolean')
                .to.equal(true);
        });


        it('style.original should be a string and be eql', function(){

            expect( utils.createToken( testStyleElement, testBasicOptions, 0 ) )
                .to.have.deep.property('style.original')
                .to.be.a('string')
                .to.equal('style = "display: block;width: 100%;height: 34px;"');
        });

        it('style.properties should have a length of 3 and be eql', function(){

            expect( utils.createToken( testStyleElement, testBasicOptions, 0 ) )
                .to.have.deep.property('style.properties')
                .to.have.length(3)
                .to.eql([ 'display: block', 'width: 100%', 'height: 34px' ]);
        });

    });

});


describe('Parse Token', function(){

    var file = '<div class="blah blah-blad  classhaha #awefweaf"></div><div class="blah blahclasshaha #awefaaaaweaf" style = "display: block;width: 100%;height: 34px;"></div>';
    var options = {
        hook: '#'
    };

    it('Should return an object', function(){

        expect( parsers.parseTokens( file, options ) )
            .to.be.an('object');
    });

    it('Retured object properties should be arrays', function(){

        expect( parsers.parseTokens( file, options ) )
            .to.have.property('tokens')
            .to.be.an('array');

        expect( parsers.parseTokens( file, options ) )
            .to.have.property('split_source')
            .to.be.an('array');
    });

});
