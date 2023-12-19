import React from 'react';
import './seller-info.css'

const SellerInfo = () => {
  return (
    <div className="profile-sell">
      <div className="profile-sell__content">
        <div className="profile-sell__seller seller">
          <div className="seller__left">
            <div className="seller__img">
              <a href="" target="_self">
                <img src="#" alt="" />
              </a>
            </div>
          </div>
          <div className="seller__right">
            <h3 className="seller__title">Кирилл Матвеев</h3>
            <p className="seller__city">Санкт-Петербург</p>
            <p className="seller__inf">Продает товары с августа 2021</p>

            <div className="seller__img-mob-block">
              <div className="seller__img-mob">
                <a href="" target="_self">
                  <img src="#" alt="" />
                </a>
              </div>
            </div>

            <button className="seller__btn btn-hov02">
              Показать&nbsp;телефон
              <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
