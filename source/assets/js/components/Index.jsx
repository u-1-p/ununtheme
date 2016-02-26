'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = require('./Header');
var NewsList = require('./NewsList');
var PhotoList = require('./PhotoList');

module.exports = React.createClass({

  componentWillMount: function(){
  },


  componentDidMount: function(){
  },


  render: function(){
    return (
      <main className='content_index'>
        <div className='header_top'>
          <Header />
          <div className='header_logo_text'>
            <img src='http://static.tumblr.com/27cbjg2/FJco17b9p/logo_top.svg' alt='logo we take photographies'/>
          </div>
        </div>
        <NewsList />
        <PhotoList />
      </main>
    );
  }
});