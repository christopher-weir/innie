'use strict';

var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var parsers     = require('../../src/parsers');
var expect      = require('chai').expect;


var testReactFile = 'var Timer = React.createClass({displayName: "Timer",getInitialState: function getInitialState() {return { secondsElapsed: 0 };},tick: function tick() {this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });},componentDidMount: function componentDidMount() {this.interval = setInterval(this.tick, 1000);},componentWillUnmount: function componentWillUnmount() {clearInterval(this.interval);},render: function render() {return React.createElement("div",{ className: "test agagin #new", style: { "color": "red" } },"Seconds Elapsed:",this.state.secondsElapsed);}});';
var splitSrc = utils.splitReact( testReactFile );
var chunk = 'React.createElement("div",{ className: "test agagin #new", style: { "color": "red" } },"Seconds Elapsed: ",this.state.secondsElapsed);';


describe('Parse React file', function(){


    it('Should split the file at React.createElement', function(){
        expect( splitSrc )
            .to.be.an('array');
    });

});


describe('React Token', function(){

    it('Token should be an object', function(){
        expect( utils.createReactToken( chunk )  )
            .to.be.an('object');
    });

    it('Token should have a style', function(){
        expect( utils.createReactToken( chunk )  )
            .to.have.deep.property('style.has_style')
            .to.be.a('boolean')
            .to.eql(true);
    });

    it('Token style should be a string and matching', function(){
        expect( utils.createReactToken( chunk )  )
            .to.have.deep.property('style.original')
            .to.be.a('string')
            .to.eql('style: { "color": "red" }');
    });


});
