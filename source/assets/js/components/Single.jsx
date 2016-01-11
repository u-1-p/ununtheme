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
        <div className='header_other'>
          <Header />
            <div className='header_other_img'><img src='assets/source/img/single_top.jpg'/></div>
        </div>

        <Singlecompo />
      </main>
    );
  }
});