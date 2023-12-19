import React from 'react';
import './article-left.css'

const ArticleLeft = () => {
  return (
    <div className="article__left">
      <div className="article__fill-img">
        <div className="article__img">
          <img src="" alt="" />
        </div>
        <div className="article__img-bar">
          <div className="article__img-bar-div">
            <img src="" alt="" />
          </div>
          <div className="article__img-bar-div">
            <img src="" alt="" />
          </div>
          <div className="article__img-bar-div">
            <img src="" alt="" />
          </div>
          <div className="article__img-bar-div">
            <img src="" alt="" />
          </div>
          <div className="article__img-bar-div">
            <img src="" alt="" />
          </div>
          <div className="article__img-bar-div">
            <img src="" alt="" />
          </div>
        </div>
        <div className="article__img-bar-mob img-bar-mob">
          <div className="img-bar-mob__circle circle-active"></div>
          <div className="img-bar-mob__circle"></div>
          <div className="img-bar-mob__circle"></div>
          <div className="img-bar-mob__circle"></div>
          <div className="img-bar-mob__circle"></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLeft;
