import React from 'react';
import './article-right.css';
import { ADV_PAGE, MY_ADV } from '../../../constants/pagesConst';


const ArticleRight = ({ namePage }: Page) => {

  return (
    <div className="article__right">
      <div className="article__block">
        <h3 className="article__title title">
          Ракетка для большого тенниса Triumph Pro STС Б/У
        </h3>
        <div className="article__info">
          <p className="article__date">Сегодня в 10:45</p>
          <p className="article__city">Санкт-Петербург</p>
          <a className="article__link" href="" target="_blank" rel="">
            23 отзыва
          </a>
        </div>
        <p className="article__price">2 200 ₽</p>
        {namePage === ADV_PAGE && (
          <button className="article__btn btn-hov02">
            Показать&nbsp;телефон
            <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
          </button>
        )}

        {namePage === MY_ADV && (
          <>
            <button className="article__btn btn-redact btn-hov02">
              Редактировать
            </button>
            <button className="article__btn btn-remove btn-hov02">
              Снять с публикации
            </button>
          </>
        )}

        <div className="article__author author">
          <div className="author__img">
            <img src="" alt="" />
          </div>
          <div className="author__cont">
            <p className="author__name">Кирилл</p>
            <p className="author__about">Продает товары с августа 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleRight;
