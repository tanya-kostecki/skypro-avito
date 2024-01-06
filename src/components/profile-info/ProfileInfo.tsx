import React from 'react';
import { ProductsContainer } from '../products/products.styles';
import * as S from './profile-info.styles';
import { ProductsTitle } from '../products/products.styles';
import { Loader } from '../loader/loader.styles';
import { useGetCurrentUserQuery } from '../../services/user';

const ProfileInfo = () => {
  const { data: currentUser, isFetching } = useGetCurrentUserQuery(null);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <ProductsContainer>
      <S.ProfileIntoTitle>
        Здравствуйте, {currentUser?.name}!
      </S.ProfileIntoTitle>

      <S.ProfileSettings>
        <S.ProfileSettingsTitle>Настройки профиля</S.ProfileSettingsTitle>
        <S.ProfileSettingsBlock>
          <S.AvatarBlock>
            <S.AvatarImg />
            <S.ChangeAvatar href="#">Заменить</S.ChangeAvatar>
          </S.AvatarBlock>
          <S.InputBlock>
            <S.InputNameSurname>
              <S.InputBlockName>
                <S.InputBlockLabel>Имя</S.InputBlockLabel>
                {currentUser?.name ? (
                  <S.NameInput defaultValue={currentUser.name} />
                ) : (
                  <S.NameInput />
                )}
              </S.InputBlockName>
              <S.InputBlockName>
                <S.InputBlockLabel>Фамилия</S.InputBlockLabel>
                {currentUser?.surname ? (
                  <S.NameInput defaultValue={currentUser.surname} />
                ) : (
                  <S.NameInput />
                )}
              </S.InputBlockName>
            </S.InputNameSurname>
            <S.InputBlockName>
              <S.InputBlockLabel>Город</S.InputBlockLabel>
              {currentUser?.city ? (
                <S.NameInput defaultValue={currentUser.city} />
              ) : (
                <S.NameInput />
              )}
            </S.InputBlockName>
            <S.InputBlockName>
              <S.InputBlockLabel>Телефон</S.InputBlockLabel>
              <S.InputPhone />
            </S.InputBlockName>
            <S.SaveButton>Сохранить</S.SaveButton>
          </S.InputBlock>
          <S.SettingsBlockInputs></S.SettingsBlockInputs>
        </S.ProfileSettingsBlock>
      </S.ProfileSettings>

      <ProductsTitle>Мои товары</ProductsTitle>
      {/* <Products products={userAdverts} /> */}
    </ProductsContainer>
  );
};

export default ProfileInfo;
