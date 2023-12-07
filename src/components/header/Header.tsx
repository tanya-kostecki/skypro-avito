import React from 'react'
import * as S from './header.styles'

const Header = () => {
  return (
    <S.Header>
        <S.HeaderNav>
            <S.HeaderButton className='header__button'>Вход в личный кабинет</S.HeaderButton>
        </S.HeaderNav>
    </S.Header>
  )
}

export default Header