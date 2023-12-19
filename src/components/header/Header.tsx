import React from 'react'
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <button className="header__btn-main-enter btn-hov01" id="btnMainEnter">
          Вход в личный кабинет
        </button>  
      </nav>
    </header>
  );
};

export default Header;
