import React from 'react';
import * as S from './navigation.styles';
import { MAIN_PAGE } from '../header/Header';
import { NavLink } from 'react-router-dom';

const Navigation = ({ namePage }: Page) => {
  return (
    <>
      <S.SearchBlock>
        <a className="search__logo-link" href="/">
          <S.SearchLogo
            className="search__logo-img"
            src="img/logo.png"
            alt="logo"
          />
        </a>
        {namePage === MAIN_PAGE ? (
          <>
            <S.SearchBlockInput placeholder='Поиск по объявлениям'></S.SearchBlockInput>
            <S.SearchBlockButton>Найти</S.SearchBlockButton>
          </>
        ) : (
          <NavLink to='/' style={{ textDecoration: 'none' }}>
            <S.BackToMainBtn>Вернуться на главную</S.BackToMainBtn>
          </NavLink>
        )}
      </S.SearchBlock>
    </>
  );
};

export default Navigation;