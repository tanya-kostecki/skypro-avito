import React from 'react';
import * as S from './navigation.styles';

const Navigation = () => {
  return (
    <S.Wrapper>
      <S.SearchBlock>
        <a className="search__logo-link" href="#">
          <S.SearchLogo
            className="search__logo-img"
            src="img/logo.png"
            alt="logo"
          />
        </a>
        <S.SearchBlockInput placeholder='Поиск по объявлениям'></S.SearchBlockInput>
        <S.SearchBlockButton>Найти</S.SearchBlockButton>
      </S.SearchBlock>
    </S.Wrapper>
  );
};

export default Navigation;