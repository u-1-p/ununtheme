'use strict';

var React = require('react');
var DocumentTitle = require('react-document-title');
require('jquery');

var Header = require('./Header');

module.exports = React.createClass({

  render: function(){
    return (
      <DocumentTitle title='about unun & us | unun'>
        <article className='about'>
          <div className='header_about_bkg'>
            <Header />
          </div>
          <div className='about_unun'>
            <img className="logo_about_text" src='http://static.tumblr.com/27cbjg2/Z8ko17bgb/unun_about_text.svg'/>
            <img className="logo_anime" src='https://raw.githubusercontent.com/u-1-p/ununtheme/master/source/assets/img/unun_logo_anime.gif'/>
            <img className="logo_text" src='http://static.tumblr.com/27cbjg2/EDfo17bbl/logo_text.svg'/>
            <div className='unun_text'>
              <p>
              そんな言葉をきっかけに始めたグループ。<br />
              お互いに似ているようで似ていない。<br />
              でも、お互い“うんうん”と通じるところもある。<br />
              だからグループ名は“unun”といいます。<br />
              凸凹な2人が写真を使って何かをするための方法です。<br />
              </p>
            </div>
          </div>
          <h1>about us</h1>
          <hr className="about_line" />
          <div className='about_us'>
            
            <div className='about_yuu'>
              <img src='https://raw.githubusercontent.com/u-1-p/ununtheme/master/source/assets/img/yuu_prof.png'/>              
              <h2>Yuu</h2>
              <p>
              滋賀生まれ滋賀育ち大阪通いの大学生。<br />
              Webが好きなデザインっぽいことをしてる人。<br />
              一瞬を切り取って伝えられる写真に魅了されています。<br />
              </p>
              <ul>
                <li><a href='http://u-1-p.com/'>Portfolio</a></li>
                <li><a href='http://twitter.com/u_1_p/'>Twitter</a></li>
                <li><a href='https://www.flickr.com/photos/90206522@N04/'>flickr</a></li>
                <li><a href='http://foto2u.tumblr.com/'>photolog</a></li>
              </ul>
            </div>
            <div className='about_nnm'>
              <img src='https://raw.githubusercontent.com/u-1-p/ununtheme/master/source/assets/img/nnm_prof.png'/>
              <h2>nnm</h2>

              <p>
              大阪の大学に通うふつうの女の子。<br />
              ”美しい”ものがすきな、夢見がちなハタチです。<br />
              すぐにアートできる写真の力に惚れてます。<br />
              </p>
              <ul>
                <li><a href='http://twitter.com/n_chan167/'>Twitter</a></li>
                <li><a href='https://www.flickr.com/photos/134123125@N06/'>flickr</a></li>
                <li><a href='https://www.instagram.com/nnm030/'>Instagram</a></li>
                <li><a href='http://vsco.co/nnmkg'>VSCO grid</a></li>
              </ul>
            </div>
          </div>
          <hr className="about_line" />
          <div className="article_back">
            <a href='/'>Back</a>
          </div>
        </article>
      </DocumentTitle>
    );
  }
});