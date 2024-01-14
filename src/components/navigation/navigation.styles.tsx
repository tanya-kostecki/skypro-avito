import styled from "styled-components";
import { $mobileWidth, $tabletWidth } from '../../constants/breakpoints';
import { $mainColor } from '../../globalStyles/GlobalStyles';

export const SearchBlockContainer = styled.div`
  width: 100vw;

  @media screen and (max-width: ${$mobileWidth}) {
    position: fixed;
    z-index: 99;
  }
`;
export const SearchBlockLogo = styled.a`
  @media screen and (max-width: ${$mobileWidth}) {
    display: none;
  }
`;
export const SearchLogo = styled.img`
  width: 54px;
  height: 37px;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 32px;
    height: 32px;
  }
`;

export const SearchBlock = styled.div`
  padding-top: 43px;
  padding-bottom: 43px;
  display: flex;
  align-items: center;
  padding-left: 140px;
  padding-right: 140px;

  @media screen and (max-width: ${$tabletWidth}) {
    background-color: ${$mainColor};
    padding-top: 12px;
    padding-bottom: 12px;
    gap: 10px;
    padding-left: 18px;
    padding-right: 18px;
    width: auto;
  }
`;
export const SearchLogoMobile = styled.img`
  width: 32px;
  height: 32px;
`;

export const SearchBlockInput = styled.input`
  width: 876px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  margin-left: 60px;
  padding-left: 19px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  @media screen and (max-width: ${$mobileWidth}) {
    height: 32px;
    border-radius: 30px;
    margin-left: 0px;
  }

  @media screen and (max-width: ${$tabletWidth}) {
    border-radius: 30px;
  }
`;

export const SearchBlockButton = styled.button`
  width: 158px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid #009ee4;
  background: #009ee4;
  color: #fff;
  margin-left: 10px;
  cursor: pointer;

  @media screen and (max-width: ${$mobileWidth}) {
    display: none;
  }
`;

export const BackToMainBtn = styled.button`
  width: 241px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #009ee4;
  background: #009ee4;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-left: 60px;
  cursor: pointer;

  @media screen and (max-width: ${$mobileWidth}) {
    display: none;
  }
`;
export const MobileLogo = styled.a`
  display: none;

  @media screen and (max-width: ${$mobileWidth}) {
    display: block;
    padding-left: 18px;
  }
`;
