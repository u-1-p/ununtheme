'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

  render: function(){
    return (
      <header className='header'>
        <Link to={'/'}><img src='assets/source/img/logo_header.svg'/></Link>
          <ul>
            <li><Link to={'/about'}>about</Link></li>
            <li><Link to={'/blog'}>blog</Link></li>
            <li><Link to={'/exhibition'}>exhibition</Link></li>
          </ul>
      </header>
    );
  }
});