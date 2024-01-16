import React, { useState } from 'react';
import * as S from './header.styles';
import { NavLink, useNavigate } from 'react-router-dom';
import AddNewAdv from '../add-adv/addNewAdv';

const Header = () => {
  const [newAdv, setNewAdv] = useState<boolean>(false);

  const openNewAdv = () => {
    setNewAdv(true);
  };

  const auth = localStorage.getItem('auth');

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <S.Header>
      <S.HeaderNav>
        {!auth ? (
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
            <NavLink to="/profile" style={{ textDecoration: 'none' }}>
              <S.HeaderButton className="header__button">
                Личный кабинет
              </S.HeaderButton>
            </NavLink>
            <S.HeaderButton className="header__button" onClick={logout}>
              Выйти
            </S.HeaderButton>
          </S.Authorized>
        )}
      </S.HeaderNav>
      {newAdv ? <AddNewAdv setNewAdv={setNewAdv} /> : null}
    </S.Header>
  );
};

export default Header;
