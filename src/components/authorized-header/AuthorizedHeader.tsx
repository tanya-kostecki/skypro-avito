import React from 'react';
import './authorized.css'

const AuthorizedHeader = () => {
  return (
    <header className="authorized-header">
      <nav className="authorized-header__nav">
        <div className="authorized-header__logo logo-mob">
          <a className="logo-mob__link" href="" target="_blank">
            <img className="logo-mob__img" src="img/logo-mob.png" alt="logo" />
          </a>
        </div>
        <button className="authorized-header__btn-putAd btn-hov01" id="btputAd">
          Разместить объявление
        </button>
        <button className="authorized-header__btn-lk btn-hov01" id="btnlk">
          Личный кабинет
        </button>
      </nav>
    </header>
  );
};

export default AuthorizedHeader;
