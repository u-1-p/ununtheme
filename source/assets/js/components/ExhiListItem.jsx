 'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var moment = require('moment');

module.exports = React.createClass({
  render: function(){

    return (
      <article className="ExhiList_item">
        <div className='ExhiList_iteminfo'>
          <Link to={`/post/${this.props.id}/${this.props.slug}`} params={{id:this.props.id, slug:this.props.slug}}>
            <span className="ExhiList_itembody" dangerouslySetInnerHTML={{__html: this.props.body}} />
          </Link>
        </div>
      </article>
    );
  }
});