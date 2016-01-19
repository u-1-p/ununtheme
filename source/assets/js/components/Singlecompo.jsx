'use strict';

var React = require('react');
var config = require('../config');
var Router = require('react-router');
var State = Router.State;
var Link = Router.Link;
var DocumentTitle = require('react-document-title');

var moment = require('moment');

// tumblr api
var tumblrUrl = config.tumblrUrl;
var apiKey = config.apiKey;

// components
var Photoset = require('./Photoset');

module.exports = React.createClass({

  mixins: [
    State,
  ],

  getInitialState: function(){
    return {
      data: [],
      dataLoaded: false,
      articlePhotos: []
    };
  },


  componentWillMount: function(){
    this.loadAjax();
  },

  // コンポーネントの準備完了
  componentDidMount: function(){

  },

  // component更新された時
  componentDidUpdate: function(){

  },

  componentWillUnmount: function(){
    this.setState({
      dataLoaded: false
    });
    
  },

  // Ajax
  loadAjax: function(){
    var self = this;


    var params = self.getParams();

    $.ajax({
      type: 'GET',
      url: tumblrUrl,
      data: {
        api_key: apiKey,
        id: params.id,
        reblog_info: true,
        notes_info: true,
        format: 'html'
      },
      cache: false,
      dataType: 'jsonp',
      timeout: 10000,
      success: function(data){
        self.setState({
          data: data.response.posts[0],
          articlePhotos: data.response.posts[0].photos,
        });
      },
      error: function(){
        alert('Load Error');
      }
    });
  },

  render: function(){
    var article = this.state.data;

    // tags
    var tags = [];
    tags = tags.concat(article.tags);
    var articleTags = [];
    for (var i = 0; i < tags.length; i++) {
      articleTags.push(<li>{tags[i]}</li>);
    }
    var nametags = tags.length;


    // textのとき
    if ( article.type === 'text' ) {
      return (
        <DocumentTitle title={`${article.title} | unun`}>
          <article className='article__text'>
            <hr className='article_line' />
            <header className="article_header">
              <h1 className="article_title">{article.title}</h1>
              <div className="article_info">
                <span className="article_date">{moment.unix(new Date(article.timestamp)).format('YYYY.M.D')}</span>
              </div>
            </header>

            <div className="article_body" dangerouslySetInnerHTML={{__html: article.body}} ref='body' />
            <div className='article_namebox'><p className='article_name'>by {article.tags[nametags-1]}</p></div>
            <ul className="article_tag">{articleTags}</ul>
            <div className="article_reblog">
              <div className="article_notes">{article.note_count} Actions</div>
              <a href={`https://www.tumblr.com/reblog/${article.id}/${article.reblog_key}`} target="_blank">Reblog</a>
            </div>
            <hr className='article_line' />
            <div className="article_back">
              <a href='/'>Back</a>
            </div>
          </article>
        </DocumentTitle>
      );
    }


    // photoのとき
    else if ( article.type === 'photo' ) {
      // photos
      // SinglePhotoコンポーネントを配列分作成し、子コンポーネントにデータを渡す
      var articlePhotos = this.state.articlePhotos.map(function(photo){
        return (
          <Photoset src={photo.original_size.url} />
        );
      });


      return (
        <DocumentTitle title={`${moment.unix(new Date(article.timestamp)).format('YYYY/M/D')} | unun`}>
          
          <article className='article__photo'>
            <hr className='article_line' />
            <header className="article_header">
              <h1 className="article_title">{article.title}</h1>
            </header>
            <div className="article_photo">{articlePhotos}</div>
            <div className="article_info">
              <span className="article_date">post : {moment.unix(new Date(article.timestamp)).format('YYYY.M.D')}</span>
            </div>
            <div className="article_body_text">
              <div className="article_caption" dangerouslySetInnerHTML={{__html: article.caption}} />
              <div className='article_namebox'><p className='article_name'>by {article.tags[nametags-1]}</p></div>
              <ul className="article_tag">{articleTags}</ul>
              <div className="article_reblog">
                <div className="article_notes">{article.note_count} Actions</div>
                <a href={`https://www.tumblr.com/reblog/${article.id}/${article.reblog_key}`} target="_blank">Reblog</a>
              </div>
            </div>
            <hr className='article_line' />
            <div className="article_back">
              <a href='/'>Back</a>
            </div>
          </article>
        </DocumentTitle>
      );
    }


    // それ以外のとき
    else { //elseがないとエラー出る
      return (
        <main className="content content--single" ref='content'>
          <article className='article'>
            <div className="article_back">
              <a href='/'>Back</a>
            </div>
          </article>
        </main>
      );
    }
  }
});