import React from 'react';
import * as S from './settings.styles';

type Props = {
  setSettingsPopup: (settingsPopup: boolean) => void;
};

const AdvSettings = ({ setSettingsPopup }: Props) => {
  const closePopup = () => {
    setSettingsPopup(false);
  };

  return (
    <S.SettingsContainer>
      <S.SettingsMain>
        <S.CloseBlock>
          <S.CloseButton onClick={closePopup}>
            <S.CloseButtonImg src="/img/close.png" alt="close" />
          </S.CloseButton>
        </S.CloseBlock>
        <S.SettingsTitle>Редактировать объявление</S.SettingsTitle>
        <S.SettingsInfo>
          <div>
            <S.SettingsName>Название</S.SettingsName>
            <S.SettingsNameBlock defaultValue='Ракетка для большого тенниса Triumph Pro STС Б/У' />                        
          </div>
          <div>
            <S.SettingsName>Описание</S.SettingsName>
            <S.SettingsDescriptionBlock defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.' />
          </div>
          <div>
            <S.SettingsName>Фотографии товара</S.SettingsName>
            <S.SettingsImagesBlock>
              <S.SettingsImg />
              <S.SettingsImg />
              <S.SettingsImg />
              <S.SettingsImg />
              <S.SettingsImg />
            </S.SettingsImagesBlock>
          </div>
        </S.SettingsInfo>
        <S.SettingsPrice>
            <S.SettingsName>Цена</S.SettingsName>
            <S.SettingsPriceBlock defaultValue='2 200 P'></S.SettingsPriceBlock>
        </S.SettingsPrice>
        <S.SettingsButton>Сохранить</S.SettingsButton>
      </S.SettingsMain>
    </S.SettingsContainer>
  );
};

export default AdvSettings;
