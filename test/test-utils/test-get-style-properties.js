var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var expect      = require('chai').expect;

var testStyleString = 'style = "display: block;width: 100%;height: 34px;"';

it('Should return array', function(){

    expect( utils.getStyleProperties( testStyleString ) )
        .to.be.an('array');

});