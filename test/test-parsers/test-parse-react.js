'use strict';

var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var parsers     = require('../../src/utils/parsers');
var expect      = require('chai').expect;

var options = {
    hook        : '#',
    type        : 'react'
};
var testReactFile = '"use strict"; var React = ""; var Timer = React.createClass({ displayName: "Timer", getInitialState: function getInitialState() { return { secondsElapsed: 0 }; }, tick: function tick() { this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }); }, componentDidMount: function componentDidMount() { this.interval = setInterval(this.tick, 1000); }, componentWillUnmount: function componentWillUnmount() { clearInterval(this.interval); }, render: function render() { return React.createElement( "div", { className: "test agagin #new", style: { "color": "red" } }, "Seconds Elapsed: ", this.state.secondsElapsed, React.createElement( "p", { className: "test agagin #awefweaf", style: { "color": "red" } }, "this isa content", React.createElement( "p", { className: "test agagin #new", style: {"color":"red","font-size":"26px","margin-bottom":"1em !important"} }, "this isa content" ) ) ); } }); module.exports = Timer;';
var testStyleFile = '.faf-intro { white-space: pre-wrap; text-align: center; } .faf-intro p a { font-weight: 400 !important; color: #dc94c0 !important; } .faf-intro p a:hover { text-decoration: underline !important; } .faf-intro h1 { font-size: 26px; margin-bottom: 1em !important; } .submit-form.inactive { opacity: 0.5; pointer-events: none; } .new { color: purple; background-color: green; } .awefweaf { font-size: 26px; margin-bottom: 1em !important; } .awefaaaaweaf { font-weight: 400 !important; color: #dc94c0 !important; } ';

var splitSrc = utils.splitReact( testReactFile );
var chunk = 'React.createElement("div",{ className: "test agagin #new", style: { "color": "red" } },"Seconds Elapsed: ",this.state.secondsElapsed);';
var testBasicOptions = {
    hook: '#'
};
var token = utils.createReactToken( chunk, testBasicOptions, 0 );



var tokens  = {
    tokens: [],
    split_source: utils.splitReact( testReactFile )
};

tokens.tokens  = parsers.parseReact( tokens, testStyleFile, options );



describe('Parse React file', function(){


    it('Should split the file at React.createElement', function(){
        expect( splitSrc )
            .to.be.an('array');
    });

});


describe('React Token', function(){

    it('Token should be an object', function(){
        expect( token  )
            .to.be.an('object');
    });

    it('Token should have a style', function(){
        expect( token  )
            .to.have.deep.property('style.has_style')
            .to.be.a('boolean')
            .to.eql(true);
    });

    it('Token style should be a string and matching', function(){
        expect( token  )
            .to.have.deep.property('style.original')
            .to.be.a('string')
            .to.eql('style: { "color": "red" }');
    });

    it('Token style properties should be an array and matching', function(){
        expect( token  )
            .to.have.deep.property('style.properties')
            .to.be.an('array')
            .to.eql([ '"color": "red"' ]);
    });



    // should take React.createElement(
    //   'div',
    //   { className: 'test agagin #new', style: { 'color': 'red' } },
    //   'Seconds Elapsed: ',
    //   this.state.secondsElapsed
    // );
    //
    // and return
    // className: 'test agagin #new'
    //

    // it('Token class should be a string and matching', function(){
    //     expect( utils.createReactToken( chunk )  )
    //         .to.have.deep.property('class.original')
    //         .to.be.a('string')
    //         .to.eql('className: "test agagin #new"');
    // });


});


describe('React Node', function(){

    it('New node should return a string', function(){
        expect( utils.createReactNode( token )  )
            .to.be.a('string');
    });
});
