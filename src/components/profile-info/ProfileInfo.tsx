import React from 'react';
import { Container } from '../products/products.styles';
import * as S from './profile-info.styles';
import { ProductsTitle, ProductsMain } from '../products/products.styles';
import { myProducts } from '../../constants/myProductsConst';
import ProductItem from '../products/ProductItem';

const ProfileInfo = () => {
  return (
    <Container>
      <S.ProfileIntoTitle>Здравствуйте, Антон!</S.ProfileIntoTitle>
      <S.ProfileSettings>
        <S.ProfileSettingsTitle>Настройки профиля</S.ProfileSettingsTitle>
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
            <S.ChangeAvatar href="#">Заменить</S.ChangeAvatar>
          </S.AvatarBlock>
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
          </S.InputBlock>

          <S.SettingsBlockInputs></S.SettingsBlockInputs>
        </S.ProfileSettingsBlock>
      </S.ProfileSettings>
      <ProductsTitle>Мои товары</ProductsTitle>
      <ProductsMain>
        {myProducts.map((myProduct) => (
          <ProductItem
            key={myProduct.id}
            descriptionTitle={myProduct.descriptionTitle}
            price={myProduct.price}
            city={myProduct.city}
            date={myProduct.date}
            id={0}
          />
        ))}
      </ProductsMain>
    </Container>
  );
};

export default ProfileInfo;
