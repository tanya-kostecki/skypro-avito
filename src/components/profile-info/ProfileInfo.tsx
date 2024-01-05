import React from 'react';
import { ProductsContainer } from '../products/products.styles';
import * as S from './profile-info.styles';
import { ProductsTitle } from '../products/products.styles';
import { PROFILE_PAGE } from '../../constants/pagesConst';
import { Page } from '../../types';
import { useGetAdvertsQuery } from '../../services/adverts';
import Products from '../products/Products';
import { baseUrl } from '../../api/AdvApi';
import { Loader } from '../loader/loader.styles';
import { useGetCurrentUserQuery } from '../../services/user';

const ProfileInfo = ({ namePage, userId }: Page) => {
  const { data: adverts, isLoading } = useGetAdvertsQuery(null);

  const { data: currentUser, isFetching } = useGetCurrentUserQuery(null)

  const userAdverts = adverts?.filter((adv) => adv?.user_id === userId);

  if (isFetching) {
    return <Loader/>
  }

  return (
    <ProductsContainer>
      {namePage === PROFILE_PAGE && currentUser ? (
        <S.ProfileIntoTitle>Здравствуйте, {currentUser.name}!</S.ProfileIntoTitle>
      ) : (
        <S.ProfileIntoTitle>Профиль продавца</S.ProfileIntoTitle>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <S.ProfileSettings>
            {namePage === PROFILE_PAGE ? (
              <S.ProfileSettingsTitle>Настройки профиля</S.ProfileSettingsTitle>
            ) : null}

            <S.ProfileSettingsBlock>
              {userAdverts && (
                <S.AvatarBlock>
                  {userAdverts[0]?.user?.avatar ? (
                     <S.AvatarImg
                     src={`${baseUrl}${userAdverts[0]?.user?.avatar}`}
                   />
                  ) : <S.AvatarImg />}
                 
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
                      {currentUser?.name ? (
                        <S.NameInput defaultValue={currentUser.name}/>
                      ) : <S.NameInput />}
                      
                    </S.InputBlockName>
                    <S.InputBlockName>
                      <S.InputBlockLabel>Фамилия</S.InputBlockLabel>
                      {currentUser?.surname ? (
                        <S.NameInput defaultValue={currentUser.surname}/>
                      ) : <S.NameInput />}
                    </S.InputBlockName>
                  </S.InputNameSurname>
                  <S.InputBlockName>
                    <S.InputBlockLabel>Город</S.InputBlockLabel>
                    {currentUser?.city ? (
                        <S.NameInput defaultValue={currentUser.city}/>
                      ) : <S.NameInput />}
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

                  <S.SellerAddInfo>
                    Продает товары с августа 2021
                  </S.SellerAddInfo>
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
        </>
      )}
    </ProductsContainer>
  );
};

export default ProfileInfo;
