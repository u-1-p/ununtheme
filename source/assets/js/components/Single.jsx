'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = require('./Header');
var Singlecompo = require('./Singlecompo');

module.exports = React.createClass({

  componentWillMount: function(){
  },


  componentDidMount: function(){
  },


  render: function(){
    return (
      <main className='content_index'>
        <div className='header_single_bkg'>
          <Header />
        </div>
        <Singlecompo />
      </main>
    );
  }
});