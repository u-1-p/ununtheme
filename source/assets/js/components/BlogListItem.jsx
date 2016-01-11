 'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var moment = require('moment');

module.exports = React.createClass({
  render: function(){

    return (
      <article className="BlogList_item">
        <div className="BlogList_itemInfo">
          <Link to={`/post/${this.props.id}/${this.props.slug}`} params={{id:this.props.id, slug:this.props.slug}}>
            <span className='BlogList_itemDate'>{moment.unix(new Date(this.props.timestamp)).format('YYYY.M.D')}　{this.props.title}</span>
          </Link>
        </div>
      </article>
    );
  }
});