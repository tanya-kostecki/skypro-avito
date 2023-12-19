import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_01.png" alt="home" />
          </a>
        </div>
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_02.png" alt="home" />
          </a>
        </div>
        <div className="footer__img">
          <a href="" target="_self">
            <img src="img/icon_03.png" alt="home" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
