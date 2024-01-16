import styled from 'styled-components';
import { $mainColor } from '../../globalStyles/GlobalStyles';
import { $mobileWidth } from '../../constants/breakpoints';

export const AdvContainer = styled.div``;

export const Adv = styled.div`
  display: flex;
  gap: 59px;

  @media screen and (max-width: ${$mobileWidth}) {
    flex-direction: column;
    gap: 0px;
    padding-top: 60px;
  }
`;

export const AdvImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 480px;

  @media screen and (max-width: ${$mobileWidth}) {
  }
`;

export const ImageBig = styled.img`
  width: 480px;
  height: 480px;
  background: #f0f0f0;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 100%;
    height: 320px;
  }
`;
export const SmallImages = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media screen and (max-width: ${$mobileWidth}) {
    display: none;
  }
`;
export const ImageSmall = styled.img`
  width: 88px;
  height: 88px;
  border: 2px #009ee4;
  background: #f0f0f0;
`;

export const AdvMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdvTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: left;

  @media screen and (max-width: ${$mobileWidth}) {
    font-family: Noto Sans;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const AdvP = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #5f5f5f;

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const AdvReviews = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
export const AdvREviewLink = styled.a`
  font-family: Noto Sans;
  text-decoration: none;
  color: ${$mainColor};

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const AdvPrice = styled.p`
  font-family: Noto Sans;
  font-size: 28px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const AdvButtons = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: ${$mobileWidth}) {
    flex-direction: column;
  }
`;
export const AdvButton = styled.button`
  width: 214px;
  height: 62px;
  padding: 10px, 37px, 10px, 37px;
  border-radius: 6px;
  gap: 10px;
  background-color: ${$mainColor};
  color: #ffffff;
  border: ${$mainColor};

  @media screen and (max-width: ${$mobileWidth}) {
    width: 100%;
    height: 57p;
    padding: 10px 37px 10px 37px;
    border-radius: 6px;
    gap: 10px;
  }
`;
export const AdvSeller = styled.div`
  margin-top: 34px;
  display: flex;
  gap: 12px;
`;
export const AdvSellerImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #F0F0F0;
`
export const AdvSellerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AdvSellerName = styled.span`
  font-family: Noto Sans;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: ${$mainColor};

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const AdvSellerDate = styled.span`
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #5f5f5f;

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const ProductDescription = styled.div`
  margin-bottom: 117px;

  @media screen and (max-width: ${$mobileWidth}) {
    margin-top: 30px;
    overflow-y: scroll;
  }
`;
export const ProductTitle = styled.h2`
  font-family: Noto Sans;
  font-size: 32px;
  font-weight: 500;
  line-height: 70px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const ProductText = styled.p`
  width: 792px;
  height: 120px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 100%;
  }
`;
