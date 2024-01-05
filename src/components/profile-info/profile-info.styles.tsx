import styled from "styled-components";
import { $mobileWidth } from '../../constants/breakpoints';

export const ProfileIntoTitle = styled.h2`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 220%;
  margin-bottom: 10px;
  display: flex;
  gap: 5.5px;

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 24px;
    font-weight: 500;
    text-align: left;

    &:before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      transform: rotate(-45deg);
      position: absolute;
      cursor: pointer;
      top: 80px;
      left: 40px;
    }
  }
`;

export const ProfileSettings = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;

  @media screen and (max-width: ${$mobileWidth}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }
`;

export const ProfileSettingsTitle = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;

  @media screen and (max-width: ${$mobileWidth}) {
    font-size: 18px;
    font-weight: 500;
    text-align: left;
  }
`;

export const ProfileSettingsBlock = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 50px;

  @media screen and (max-width: ${$mobileWidth}) {
    flex-direction: column;
    width: 100vw;
    gap: 0px;
  }
`;

export const AvatarBlock = styled.div`
  display: flex;
  gap: 10px;
  width: 100vw;

  @media screen and (max-width: ${$mobileWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const AvatarImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #F0F0F0;
`
export const ChangeAvatar = styled.a`
  color: #009ee4;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
`;

export const SettingsBlockInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 614px;
`;
export const InputBlock = styled.div`
  @media screen and (max-width: ${$mobileWidth}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;
export const InputNameSurname = styled.div`
  display: flex;
  gap: 14px;

  @media screen and (max-width: ${$mobileWidth}) {
    flex-direction: column;
  }
`;

export const InputBlockName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

export const InputBlockLabel = styled.label`
  color: #009ee4;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const NameInput = styled.input`
  width: 300px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #009ee4;
  background: #fff;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 279px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid;
  }
`;
export const InputBlockCity = styled.div``;
export const InputPhone = styled.input`
  width: 614px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #009ee4;
  background: #fff;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 279px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid;
  }
`;

export const SaveButton = styled.button`
  padding: 13px 37px;
  border-radius: 6px;
  border: #009ee4;
  cursor: pointer;
  background: #009ee4;
  margin-top: 30px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 278px;
    height: 46px;
  }
`;

export const SellerName = styled.p`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
`

export const SellerAddInfo = styled.span`
    color: #5F5F5F;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
`