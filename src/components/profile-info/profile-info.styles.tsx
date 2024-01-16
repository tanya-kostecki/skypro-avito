import styled from "styled-components";
import { $mobileWidth, $tabletWidth } from '../../constants/breakpoints';

export const ProfileGreetingsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`
export const ProfileIntoTitle = styled.span`
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
    margin-bottom: 4px;
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
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  

  @media screen and (max-width: ${$mobileWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const AvatarImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;
export const ChangeAvatar = styled.button`
  color: #009ee4;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background-color: transparent;

  @media screen and (max-width: ${$tabletWidth}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ChangeAvatarInput = styled.input`
  opacity: 0;
`

export const SettingsBlockInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 614px;
`;
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${$mobileWidth}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

export const InputForm = styled.form`
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
  padding-left: 20px;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 279px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid;
  }
`;
export const SurnameInput = styled.input`
  width: 300px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #009ee4;
  background: #fff;
  padding-left: 20px;

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
  padding-left: 20px;

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