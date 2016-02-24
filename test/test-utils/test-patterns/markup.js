'use strict';

exports.htmlNodeToken = function() {
    return {
        index: 17,
        original: '<div class="blah blah-blad  classhaha #awefweaf">',
        style: {
            has_style: false,
            original: '',
            properties: [],
            compiled: 'font-size: 26px; margin-bottom: 1em !important;'
        },
        class: {
            original: 'class="blah blah-blad  classhaha #awefweaf"',
                all: ['blah', 'blah-blad', 'classhaha', '#awefweaf'],
                matches: ['#awefweaf'],
                unmatched: ['blah', 'blah-blad', 'classhaha']
        }
    };
};

exports.htmlNodeTokenExpected = function() {
    return '<div  class="blah blah-blad classhaha" style="font-size: 26px; margin-bottom: 1em !important;">';
};

exports.reactNodeToken = function() {
    return {
        index: 13,
        original: '{ className: \'test agagin #new\',  style: {\'color\':\'red\',\'font-size\':\'26px\',\'margin-bottom\':\'1em !important\'}',
        style: {
            has_style: true,
            original: 'style: {\'color\':\'red\',\'font-size\':\'26px\',\'margin-bottom\':\'1em !important\'}',
            properties: ['color:red', 'font-size:26px', 'margin-bottom:1em !important'],
            compiled: '\'color\':\'purple\',\'font-size\':\'26px\',\'margin-bottom\':\'1em !important\',\'background-color\':\'green\''
        },
        class: {
            original: 'className: \'test agagin #new\'',
                all: ['test', 'agagin', '#new'],
                matches: ['#new'],
                unmatched: ['test', 'agagin']
        }
    };
};

exports.reactNodeTokenExpected = function() {
    return '{ className: \'test agagin\',   style: {\'color\':\'purple\',\'font-size\':\'26px\',\'margin-bottom\':\'1em !important\',\'background-color\':\'green\'}';
};

exports.reactFile = function(){
    return '\'use strict\';var React = \'\';var Timer = React.createClass({  displayName: \'Timer\',  getInitialState: function getInitialState() {    return { secondsElapsed: 0 };  },  tick: function tick() {    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });  },  componentDidMount: function componentDidMount() {    this.interval = setInterval(this.tick, 1000);  },  componentWillUnmount: function componentWillUnmount() {    clearInterval(this.interval);  },  render: function render() {    return React.createElement(      \'div\',      { className: \'test agagin #new\', style: { \'color\': \'red\' } },      \'Seconds Elapsed: \',      this.state.secondsElapsed,      React.createElement(        \'p\',        { className: \'test agagin #awefweaf\', style: { \'color\': \'red\' } },        \'this isa content\',        React.createElement(          \'p\',           { className: \'test agagin #new\',  style: {\'color\':\'red\',\'font-size\':\'26px\',\'margin-bottom\':\'1em !important\'}  },          \'this isa content\'        )      )    );  }});';
};
exports.reactSplitFileExpected = function(){
return [ '\'use strict\';var React = \'\';var Timer = React.createClass(',
  '{  displayName: \'Timer\',  getInitialState: function getInitialState() {    return { secondsElapsed: 0 }',
  ';  },  tick: function tick() ',
  '{    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }',
  ');  },  componentDidMount: function componentDidMount() ',
  '{    this.interval = setInterval(this.tick, 1000);  }',
  ',  componentWillUnmount: function componentWillUnmount() ',
  '{    clearInterval(this.interval);  }',
  ',  render: function render() ',
  '{    return React.createElement(      \'div\',      { className: \'test agagin #new\', style: { \'color\': \'red\' }',
  ' },      \'Seconds Elapsed: \',      this.state.secondsElapsed,      React.createElement(        \'p\',        ',
  '{ className: \'test agagin #awefweaf\', style: { \'color\': \'red\' }',
  ' },        \'this isa content\',        React.createElement(          \'p\',           ',
  '{ className: \'test agagin #new\',  style: {\'color\':\'red\',\'font-size\':\'26px\',\'margin-bottom\':\'1em !important\'}',
  '  },          \'this isa content\'        )      )    );  }});' ];
};
