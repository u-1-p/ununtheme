
 'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var DocumentTitle = require('react-document-title');
var config = require('../config');

// tumblr api
var tumblrUrl = config.tumblrUrl;
var apiKey = config.apiKey;
var limit = 5;

// components
var Header = require('./Header');
var ExhiListItem = require('./ExhiListItem');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      data: [],
      page: 1,
      articleCount: limit,
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
        offset: self.state.page * limit - limit,
        reblog_info: false,
        notes_info: false,
        format: 'html',
        tag: 'exhibition'
      },
      cache: false,
      dataType: 'jsonp',
      timeout: 10000,
      success: function(data){
        // データに新しく取得したデータを連結する
        // 初回はoldDataは空
        var oldData = self.state.data;
        var newData = oldData.concat(data.response.posts);

        // dataに取得したデータを入れる
        self.setState({
          data: newData,
          articleTotal: data.response.total_posts,
        });

        // 最後まで表示したらMOREボタン隠す
        self.chackLastPage();
      },
      error: function(){
        alert('Load Error');
      }
    });
  },

  // ページ番号確認用関数
  chackLastPage: function(){
    if ( this.state.articleCount >= this.state.articleTotal ) {
      var more = React.findDOMNode(this.refs.more);
      $(more).css({ 'display':'none' });
    }
    if ( this.state.articleTotal == 0) {
      var noneExhi = React.findDOMNode(this.refs.noneExhi);
      $(noneExhi).css({ 'display':'block' });
    }  
  },

  // 次ページ読み込み用関数
  nextPage: function(e){
    // ページ番号をアップデート
    this.setState({
      page: this.state.page + 1,
      articleCount: this.state.articleCount + limit,
    });

    // 次ページのデータを取得
    this.loadAjax();
  },

  // コンポーネントの準備完了
  componentDidMount: function(){
    // 1ページ目のデータを取得
    this.loadAjax();

    // 1ページ目が読み込まれたらページ番号を更新しておく
    // スクロールによる読み込みでなく、ボタンクリックでの次ページ呼び出しの場合、
    // こうしないと同じページが呼ばれてしまう
    this.setState({
      page: this.state.page + 1
    });
  },

  render: function(){
  //コンポーネントを配列分作成し、データを渡す
    var articleNodes = this.state.data.map(function(article){
      return (
        <ExhiListItem
          title={article.title}
          timestamp={article.timestamp}
          slug={article.slug}
          tags={article.tags}
          body={article.body}
          id={article.id}
          key={article.id}
          type={article.type}
          photos={article.photos}
        />
      );
    });

    return (
      <DocumentTitle title={`exhibition | unun`}>
        <article className='Exhi_list'>
          <div className='header_exhi_bkg'>
            <Header />
          </div>
          <h1 className='page_title'>exhibition schedule</h1>
          <hr className='page_line' />
          <h2 className='Exhilist_none' style={{ 'text-align':'center'}} ref='noneExhi'>Sorry. We have no plans to to hold our exhibition.</h2>
          <div className='Exhilist_items'>
            {articleNodes}
          </div>
          <div className="ExhiList__more" ref='more'>
            <div onClick={this.nextPage} style={{cursor:'pointer'}}><img src='http://static.tumblr.com/27cbjg2/mWLo17bcb/morebtn.svg'/></div>
          </div>
          <hr className='page_line' />
        </article>
      </DocumentTitle>
    );
  }
});
