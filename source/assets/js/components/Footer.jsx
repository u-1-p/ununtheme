'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


module.exports = React.createClass({

  render: function(){
    return (
      <footer className='footer'>
        <div className='footer'>
          <ul>
            <li><Link to={'/'}><img src='http://static.tumblr.com/27cbjg2/xGho0bl0e/home_icon.svg'/></Link></li>
            <li><Link to={'/about'}><img src='http://static.tumblr.com/27cbjg2/0Bjo0bl09/about_icon.svg'/></Link></li>
            <li><a href='http://twitter.com/un_un_me'><img src='http://static.tumblr.com/27cbjg2/m1vo0bl11/twitter_icon.svg'/></a></li>
          </ul>
          <p>
          all photo by “unun” thanks for watching
          </p>
          <p>© 2016 “unun” All rights reserved.</p>
        </div>
      </footer>
    );
  }
});