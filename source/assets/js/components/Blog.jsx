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
var BlogListItem = require('./BlogListItem');

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
        tag: 'News'
      },
      cache: false,
      dataType: 'jsonp',
      timeout: 10000,
      success: function(data){
        // 初回はoldData
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

  // ページ番号確認用
  chackLastPage: function(){
    if ( this.state.articleCount >= this.state.articleTotal ) {
      var more = React.findDOMNode(this.refs.more);
      $(more).css({ 'display':'none' });
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
        <BlogListItem
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
      <DocumentTitle title={`blog | unun`}>
        <article className='Blog_list'>
          <div className='header_blog_bkg'>
            <Header />
          </div>
          <h1 className='page_title'>blog</h1>
          <hr className='page_line' />
          <div className='Bloglist_Items'>
            {articleNodes}
          </div>
          <div className="BlogList__more" ref='more'>
            <div onClick={this.nextPage} style={{cursor:'pointer'}}><img src='http://static.tumblr.com/27cbjg2/mWLo17bcb/morebtn.svg'/></div>
          </div>
          <hr className='page_line' />
        </article>
      </DocumentTitle>
    );
  }
});
