import React from 'react';
import * as S from './navigation.styles';
import { MAIN_PAGE } from '../header/Header';
import { NavLink } from 'react-router-dom';
import { Page } from '../../types';

const Navigation = ({ namePage }: Page) => {
  return (
    <S.SearchBlockContainer>
      <S.SearchBlock>
        <S.SearchBlockLogo href="/">
          <S.SearchLogo
            className="search__logo-img"
            src="img/logo.png"
            alt="logo"
          />
        </S.SearchBlockLogo>
        <S.MobileLogo>
          <S.SearchLogoMobile
            className="search__logo-img"
            src="/img/logo-mob.png"
            alt="logo"
          />
        </S.MobileLogo>

        {namePage === MAIN_PAGE ? (
          <>
            <S.SearchBlockInput placeholder="Поиск по объявлениям"></S.SearchBlockInput>
            <S.SearchBlockButton>Найти</S.SearchBlockButton>
          </>
        ) : (
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <S.BackToMainBtn>Вернуться на главную</S.BackToMainBtn>
          </NavLink>
        )}
      </S.SearchBlock>

    </S.SearchBlockContainer>
  );
};

export default Navigation;