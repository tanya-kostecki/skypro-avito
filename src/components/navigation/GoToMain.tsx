import React from 'react';
import './backtomain.css'

const GoToMain = () => {
  return (
    <div className="menu seller-menu">
      <a className="menu__logo-link" href="" target="_blank">
        <img className="menu__logo-img" src="img/logo.png" alt="logo" />
      </a>
      <form className="menu__form" action="#">
        <button className="menu__btn btn-hov02" id="btnGoBack">
          Вернуться на&nbsp;главную
        </button>
      </form>
    </div>
  );
};

export default GoToMain;
