import React from 'react';
import { ProductsContainer } from '../products/products.styles';
import * as S from '../profile-info/profile-info.styles';
import { ProductsTitle } from '../products/products.styles';
import { useGetAdvertsQuery } from '../../services/adverts';
import Products from '../products/Products';
import { baseUrl } from '../../api/AdvApi';
import { Loader } from '../loader/loader.styles';

type User = {
  userId: number;
};
const SellerProfileInfo = ({ userId }: User) => {
  const { data: adverts, isLoading } = useGetAdvertsQuery(null);

  const userAdverts = adverts?.filter((adv) => adv?.user_id === userId);

  return (
    <ProductsContainer>
      <S.ProfileIntoTitle>Профиль продавца</S.ProfileIntoTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <S.ProfileSettings>
            <S.ProfileSettingsBlock>
              {userAdverts && (
                <S.AvatarBlock>
                  {userAdverts[0]?.user?.avatar ? (
                    <S.AvatarImg
                      src={`${baseUrl}${userAdverts[0]?.user?.avatar}`}
                    />
                  ) : (
                    <S.AvatarImg />
                  )}
                </S.AvatarBlock>
              )}

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

              <S.SettingsBlockInputs></S.SettingsBlockInputs>
            </S.ProfileSettingsBlock>
          </S.ProfileSettings>
          <ProductsTitle>Товары продавца</ProductsTitle>
          <Products products={userAdverts} />
        </>
      )}
    </ProductsContainer>
  );
};

export default SellerProfileInfo;
