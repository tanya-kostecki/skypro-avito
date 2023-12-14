import styled from 'styled-components';
import { $mainColor } from '../../globalStyles/GlobalStyles';

export const AdvContainer = styled.div`
 
`;

export const Adv = styled.div`
  display: flex;
  gap: 59px;
`;

export const AdvImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ImageBig = styled.img`
  width: 480px;
  height: 480px;
  background: #f0f0f0;
`;
export const SmallImages = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
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
`;
export const AdvP = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #5f5f5f;
`;
export const AdvReviews = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
export const AdvREviewLink = styled.a`
  text-decoration: none;
  color: ${$mainColor};
`;
export const AdvPrice = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
`;
export const AdvButtons = styled.div`
  display: flex;
  gap: 10px;
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
`;

export const AdvSeller = styled.div`
  margin-top: 34px;
  display: flex;
  gap: 12px;
`;
export const AdvSellerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AdvSellerName = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: ${$mainColor};
`;
export const AdvSellerDate = styled.span`
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #5f5f5f;
`;
export const ProductDescription = styled.div`
  margin-top: 60px;
  margin-bottom: 117px;
`;
export const ProductTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 70px;
  letter-spacing: 0em;
  text-align: left;
`;
export const ProductText = styled.p`
  width: 792px;
  height: 120px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
