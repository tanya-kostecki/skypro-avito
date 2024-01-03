import styled from 'styled-components';
import { $mobileWidth } from '../../../constants/breakpoints';

export const SettingsContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CloseBlock = styled.div`
  position: absolute;
  z-index: 999;
  top: 28px;
  right: 0px;
  padding: 10px;

  @media screen and (max-width: ${$mobileWidth}) {
    display: none;
  }
`;
export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const CloseButtonImg = styled.img`
  width: 40px;
  height: 40px;
`;
export const SettingsMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px 42px 50px;
  border-radius: 12px;
  background-color: white;
  width: 600px;
  position: relative;
`;
export const SettingsTitle = styled.span`
  font-size: 32px;
  font-weight: 500;
  line-height: 70px;
  letter-spacing: 0em;
  text-align: left;

  @media screen and (max-width: ${$mobileWidth}) {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    display: block;
    padding-top: 30px;
  }
`;
export const SettingsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const SettingsName = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const SettingsNameBlock = styled.input`
  border-radius: 6px;
  border: 1px solid;
  padding-left: 10px;
  padding-right: 10px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  width: 100%;
  height: 50px;
`;
export const SettingsDescriptionBlock = styled.textarea`
  width: 100%;
  height: 150px;
  border-radius: 6px;
  border: 1px solid;
  padding-left: 10px;
  padding-right: 10px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
`;
export const SettingsImagesBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 10px;
`;
export const SettingsImg = styled.img`
  width: 90px;
  height: 90px;
  background: #f0f0f0;
`;
export const SettingsPrice = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const SettingsPriceBlock = styled.input`
  width: 200px;
  top: 28px;
  border-radius: 6px;
  border: 1px solid;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  padding: 13px;
`;
export const SettingsButton = styled.button`
  width: 154px;
  height: 50px;
  border-radius: 6px;
  border: #D9D9D9;
  background: #D9D9D9;
  color: #FFFFFF;
  cursor: pointer;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 100%;
  }
`;
