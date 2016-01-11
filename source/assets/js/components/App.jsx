'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var DocumentTitle = require('react-document-title');


// components
var Footer = require('./Footer');


module.exports = React.createClass({

  componentWillMount: function(){
  },

  // DOM初期化された時
  componentDidMount: function(){
  },

  // component更新された時
  componentDidUpdate: function(){
  },


  render: function(){
    return (
      <DocumentTitle title='unun'>
        <div className='app'>
          <RouteHandler />
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
});