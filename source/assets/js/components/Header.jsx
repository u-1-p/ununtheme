'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({

  render: function(){
    return (
      <div className='header_listitem'>
        <Link to={'/'}><img src='http://static.tumblr.com/27cbjg2/X3jo17b75/logo_header.svg
'/></Link>
          <ul>
            <li><Link to={'/about'}>about</Link></li>
            <li><Link to={'/blog'}>blog</Link></li>
            <li><Link to={'/exhibition'}>exhibition</Link></li>
          </ul>
      </div>
    );
  }
});