var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var expect      = require('chai').expect;


var testClassStringNormal = 'class="blah blah-blad another classhaha #awefdddweaf"';
var testClassStringEmpty = 'class=""';

it('Should return array of classes', function(){

    expect( utils.getArrayOfClasses( testClassStringNormal ) )
        .to.be.an('array');

});

it('Should work if class attr is empty', function(){

    expect( utils.getArrayOfClasses( testClassStringEmpty ) )
        .to.be.an('array');

});