import React from 'react';
import { ProductsContainer } from '../products/products.styles';
import * as S from './profile-info.styles';
import { ProductsTitle } from '../products/products.styles';
import { PROFILE_PAGE } from '../../constants/pagesConst';
import { Page } from '../../types';
import { useGetAdvertsQuery } from '../../services/adverts';
import Products from '../products/Products';
import { baseUrl } from '../../api/AdvApi';

const ProfileInfo = ({ namePage, userId }: Page) => {
  const { data: adverts } = useGetAdvertsQuery(null);

  const userAdverts = adverts?.filter((adv) => adv?.user_id === userId);

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
          {userAdverts && (
            <S.AvatarBlock>
              <S.AvatarImg src={`${baseUrl}${userAdverts[0]?.user?.avatar}`} />
              {namePage === PROFILE_PAGE ? (
                <S.ChangeAvatar href="#">Заменить</S.ChangeAvatar>
              ) : null}
            </S.AvatarBlock>
          )}

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
              {userAdverts && (
                <>
                  <S.SellerName>{userAdverts[0]?.user?.name}</S.SellerName>
                  <S.SellerAddInfo>
                    {userAdverts[0]?.user?.city}
                  </S.SellerAddInfo>
                </>
              )}

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

      <Products products={userAdverts} />
    </ProductsContainer>
  );
};

export default ProfileInfo;
