 'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var moment = require('moment');

module.exports = React.createClass({
  render: function(){

    return (
      <article className="NewsList_item">
        <Link to={`/post/${this.props.id}/${this.props.slug}`} params={{id:this.props.id, slug:this.props.slug}}>
          <div className="NewsList_itemInfo">
            <span className='NewsList_itemDate'>{moment.unix(new Date(this.props.timestamp)).format('YYYY/M/D')}　{this.props.title}</span>
          </div>
        </Link>
      </article>
    );
  }
});