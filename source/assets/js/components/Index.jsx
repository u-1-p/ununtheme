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
          <div className='header_img'><img src='assets/source/img/top_top.jpg' /></div>
          <div className='header_logo_text'>
            <img src='assets/source/img/logo_top.svg' alt='logo we take photographies'/>
          </div>assets/source/img/
        </div>
        <NewsList />
        <PhotoList />
      </main>
    );
  }
});