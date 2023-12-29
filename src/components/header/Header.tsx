import React, { useState } from 'react'
import * as S from './header.styles'
import { NavLink } from 'react-router-dom';
import { MAIN_PAGE } from '../../constants/pagesConst';
import AddNewAdv from '../add-adv/addNewAdv';
export { MAIN_PAGE } from '../../constants/pagesConst';
import { Page } from '../../types';

const Header = ({ namePage }: Page) => {
  const [newAdv, setNewAdv] = useState<boolean>(false)

  const openNewAdv = () => {
    setNewAdv(true)
  }
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
              <S.HeaderButton className="header__button" onClick={openNewAdv}>
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
      {newAdv ? (<AddNewAdv setNewAdv={setNewAdv}/>) : null}
    </S.Header>
  );
}

export default Header