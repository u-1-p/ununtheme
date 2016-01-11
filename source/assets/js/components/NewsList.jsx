 'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var config = require('../config');

// tumblr api
var tumblrUrl = config.tumblrUrl;
var apiKey = config.apiKey;
var limit = 3;

// components
var NewsListItem = require('./NewsListItem');

module.exports = React.createClass({

  getInitialState: function(){
    return {
      data: [],
      page: 1,
      articleTotal: 0
    };
  },

  // Ajax
  loadAjax: function(){
    var self = this;

    $.ajax({
      type: 'GET',
      url: tumblrUrl,
      data: {
        api_key: apiKey,
        limit: limit,
        offset: this.state.page * limit - limit,
        reblog_info: false,
        notes_info: false,
        format: 'html',
        tag: 'news'
      },
      cache: false,
      dataType: 'jsonp',
      timeout: 10000,
      success: function(data){

        // dataに取得したデータを入れる
        self.setState({
          data: data.response.posts,
          articleTotal: data.response.total_posts
        });
      },
      error: function(){
        alert('Load Error');
      }
    });
  },


  componentDidMount: function(){
    //データを取得
    this.loadAjax();
  },


  render: function(){
  //コンポーネントを配列分作成し、データを渡す
    var articleNodes = this.state.data.map(function(article){
      return (
        <NewsListItem
          title={article.title}
          timestamp={article.timestamp}
          slug={article.slug}
          tags={article.tags}
          body={article.body}
          id={article.id}
          key={article.id}
          type={article.type}
          noteCount={article.note_count}
        />
      );
    });

    return (
      <div className='News_list'>
        <h1 className='NewsList_title'>News</h1>
        <hr className='NewsList_line' />
        <div className='Newslist_items'>
          {articleNodes}
        </div>
        <div className='news_more'>
          <Link to={'/blog'}>more</Link>
        </div>
        <hr className='NewsList_line' />
      </div>
    );
  }
});
