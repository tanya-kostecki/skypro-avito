import React from 'react'
import * as S from './footer.styles'

const MobileFooter = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImg>
          <a href="/" target="_self">
            <S.FooterImgImg src="/img/icon_01.png" alt="home" />
          </a>
        </S.FooterImg>
        <S.FooterImg>
          <a href="/add-new-adv" target="_self">
            <S.FooterImgImg src="/img/icon_02.png" alt="home" />
          </a>
        </S.FooterImg>
        <S.FooterImg>
          <a href="/profile" target="_self">
            <S.FooterImgImg src="/img/icon_03.png" alt="home" />
          </a>
        </S.FooterImg>
      </S.FooterContainer>
    </S.Footer>
  )
}

export default MobileFooter