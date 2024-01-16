import styled from "styled-components";
import { $mobileWidth } from '../../constants/breakpoints';

export const ProductsContainer = styled.div`
  margin-bottom: 37px;

  @media screen and (max-width: ${$mobileWidth}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    z-index: -1;
    top: 40px;
  }
`;

export const ProductsTitle = styled.h2`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 10px;

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 24px;
    font-weight: 500;
    text-align: left;
  }
`;

export const ProductsMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  padding-bottom: 37px;
  
  @media screen and (max-width: ${$mobileWidth}) {
    align-items: center;
    justify-content: center;
  }
`;
export const ProductItem = styled.div`
  width: 270px;
  height: 441px;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 137px;
    padding: 0px 0px 20px 0px;
    border-radius: 6px;
    gap: 10px;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 270px;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 137px;
    height: 259px;
  }
`;

export const CardImg = styled.div`
  margin-bottom: 20px;
  width: 270px;
  height: 270px;
  background: #f0f0f0;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 137px;
    height: 137px;
    margin-bottom: 0;
  }
`;
export const CardImgImg = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: ${$mobileWidth}) {
    margin-bottom: 0;
  }
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 259px;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 137px;
    gap: 0px;
  }
`;

export const CardDescriptionTitle = styled.span`
  color: #009ee4;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 14px;
    font-weight: 500;
    text-align: left;
  }
`;

export const CardPrice = styled.span`
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 16px;
    font-weight: 500;
    text-align: left;
  }
`;

export const CardCity = styled.span`
  color: #5f5f5f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
  }
`;

export const CardDate = styled.span`
  color: #5f5f5f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
  }
`;