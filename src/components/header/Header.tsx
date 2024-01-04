import React, { useContext, useEffect, useState } from 'react'
import * as S from './header.styles'
import { NavLink, useNavigate } from 'react-router-dom';
import AddNewAdv from '../add-adv/addNewAdv';
// export { MAIN_PAGE } from '../../constants/pagesConst';
import { UserContext } from '../../App';

const Header = () => {
  const [newAdv, setNewAdv] = useState<boolean>(false)

  const openNewAdv = () => {
    setNewAdv(true)
  }

  const { isUser, setIsUser } = useContext(UserContext)

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsUser(true)
    }
  }, [])

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    setIsUser(false)
    navigate('/login')
  }
  return (
    <S.Header>
      <S.HeaderNav> 
          {!isUser ? (
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
              <S.HeaderButton className="header__button" onClick={logout}>
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