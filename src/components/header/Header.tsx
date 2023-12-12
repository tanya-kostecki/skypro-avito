import React from 'react'
import * as S from './header.styles'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderNav>
        <NavLink to='/login' style={{'textDecoration': 'none'}}>
          <S.HeaderButton className="header__button">
            Вход в личный кабинет
          </S.HeaderButton>
        </NavLink>
      </S.HeaderNav>
    </S.Header>
  );
}

export default Header