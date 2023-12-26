import React from 'react';
import * as S from '../modals/adv-settings/settings.styles';

type Props = {
  setNewAdv: (newAdv: boolean) => void;
};

const AddNewAdv = ({ setNewAdv }: Props) => {
  const closeNewAdv = () => {
    setNewAdv(false);
  };

  return (
    <S.SettingsContainer>
      <S.SettingsMain>
        <S.CloseBlock>
          <S.CloseButton onClick={closeNewAdv}>
            <S.CloseButtonImg src="/img/close.png" alt="close" />
          </S.CloseButton>
        </S.CloseBlock>
        <S.SettingsTitle>Новое объявление</S.SettingsTitle>
        <S.SettingsInfo>
          <div>
            <S.SettingsName>Название</S.SettingsName>
            <S.SettingsNameBlock />
          </div>
          <div>
            <S.SettingsName>Описание</S.SettingsName>
            <S.SettingsDescriptionBlock />
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
          <S.SettingsPriceBlock></S.SettingsPriceBlock>
        </S.SettingsPrice>
        <S.SettingsButton>Сохранить</S.SettingsButton>
      </S.SettingsMain>
    </S.SettingsContainer>
  );
};

export default AddNewAdv;
