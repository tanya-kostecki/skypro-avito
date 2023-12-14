import React from 'react'
import * as S from './header.styles'
import { NavLink } from 'react-router-dom';
import { MAIN_PAGE } from '../../constants/pagesConst';
export { MAIN_PAGE } from '../../constants/pagesConst';

const Header = ({ namePage }: Page) => {
  return (
    <S.Header>
      <S.HeaderNav> 
          {namePage === MAIN_PAGE ? (
            <NavLink to="/login" style={{ textDecoration: 'none' }}>
              <S.HeaderButton className="header__button">
                Вход в личный кабинет
              </S.HeaderButton>
            </NavLink>
          ) : (
            <S.Authorized>
              <S.HeaderButton className="header__button">
                Разместить объявление
              </S.HeaderButton>
              <S.HeaderButton className="header__button">
                Личный кабинет
              </S.HeaderButton>
              <S.HeaderButton className="header__button">
                Выйти
              </S.HeaderButton>
            </S.Authorized>
          )}
      </S.HeaderNav>
    </S.Header>
  );
}

export default Header