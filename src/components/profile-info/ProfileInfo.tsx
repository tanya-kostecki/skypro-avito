import React from 'react';
import { ProductsContainer } from '../products/products.styles';
import * as S from './profile-info.styles';
import { ProductsTitle } from '../products/products.styles';
import { PROFILE_PAGE } from '../../constants/pagesConst';
import { Page } from '../../types';
// import Products from '../products/Products';

const ProfileInfo = ({ namePage }: Page) => {
  return (
    <ProductsContainer>
      {namePage === PROFILE_PAGE ? (
        <S.ProfileIntoTitle>Здравствуйте, Антон!</S.ProfileIntoTitle>
      ) : (
        <S.ProfileIntoTitle>Профиль продавца</S.ProfileIntoTitle>
      )}
      <S.ProfileSettings>
        {namePage === PROFILE_PAGE ? (
          <S.ProfileSettingsTitle>Настройки профиля</S.ProfileSettingsTitle>
        ) : null}

        <S.ProfileSettingsBlock>
          <S.AvatarBlock>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="170"
              viewBox="0 0 170 170"
              fill="none"
            >
              <circle cx="85" cy="85" r="85" fill="#F0F0F0" />
            </svg>
            {namePage === PROFILE_PAGE ? (
              <S.ChangeAvatar href="#">Заменить</S.ChangeAvatar>
            ) : null}
          </S.AvatarBlock>

          {namePage === PROFILE_PAGE ? (
            <S.InputBlock>
              <S.InputNameSurname>
                <S.InputBlockName>
                  <S.InputBlockLabel>Имя</S.InputBlockLabel>
                  <S.NameInput />
                </S.InputBlockName>
                <S.InputBlockName>
                  <S.InputBlockLabel>Фамилия</S.InputBlockLabel>
                  <S.NameInput />
                </S.InputBlockName>
              </S.InputNameSurname>
              <S.InputBlockName>
                <S.InputBlockLabel>Город</S.InputBlockLabel>
                <S.NameInput />
              </S.InputBlockName>
              <S.InputBlockName>
                <S.InputBlockLabel>Телефон</S.InputBlockLabel>
                <S.InputPhone />
              </S.InputBlockName>
              <S.SaveButton>Сохранить</S.SaveButton>
            </S.InputBlock>
          ) : (
            <S.InputBlock>
              <S.SellerName>Кирилл Матвеев</S.SellerName>
              <S.SellerAddInfo>Санкт-Петербург</S.SellerAddInfo>
              <S.SellerAddInfo>Продает товары с августа 2021</S.SellerAddInfo>
              <S.SaveButton>Показать телефон 8 905 ХХХ ХХ ХХ</S.SaveButton>
            </S.InputBlock>
          )}

          <S.SettingsBlockInputs></S.SettingsBlockInputs>
        </S.ProfileSettingsBlock>
      </S.ProfileSettings>
      {namePage === PROFILE_PAGE ? (
        <ProductsTitle>Мои товары</ProductsTitle>
      ) : (
        <ProductsTitle>Товары продавца</ProductsTitle>
      )}

      {/* <Products/> */}
    </ProductsContainer>
  );
};

export default ProfileInfo;
