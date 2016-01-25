'use strict';

var innie       = require('../../src/innie');
var utils       = require('../../src/utils');
var parsers     = require('../../src/parsers');
var expect      = require('chai').expect;


describe('Parse react file', function(){

    var testReactFile = 'var Timer = React.createClass({displayName: "Timer",getInitialState: function getInitialState() {return { secondsElapsed: 0 };},tick: function tick() {this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });},componentDidMount: function componentDidMount() {this.interval = setInterval(this.tick, 1000);},componentWillUnmount: function componentWillUnmount() {clearInterval(this.interval);},render: function render() {return React.createElement("div",{ className: "test agagin #new", style: { "color": "red" } },"Seconds Elapsed:",this.state.secondsElapsed);}});';

    it('Should split the file at createElement', function(){
console.log(utils.splitReact( testReactFile )[1]);
        expect( utils.splitReact( testReactFile )  )
            .to.be.an('array');
    });

});
