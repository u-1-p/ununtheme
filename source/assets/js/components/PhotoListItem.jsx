 'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var moment = require('moment');

module.exports = React.createClass({
  render: function(){

    var nametags = this.props.tags.length;

    return (
      <article className="PhotoList_item">
      
        <div className='PhotoList_Photos'>
          <Link to={`/post/${this.props.id}/${this.props.slug}`} params={{id:this.props.id, slug:this.props.slug}}>
            <img src={this.props.photos[0].original_size.url} />
          </Link>
        </div>
          <div className='PhotoList_iteminfo'>
              <div className='PhotoList_itemcaption'>
                <span dangerouslySetInnerHTML={{__html: this.props.caption}} />
              </div>
            
            <span className='PhotoList_itemTag'>by {this.props.tags[nametags-1]}</span>
          </div>
      </article>
    );
  }
});