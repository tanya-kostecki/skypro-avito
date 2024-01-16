import React from 'react';
import { Link } from 'react-router-dom';
import { MOBILE } from '../../constants/breakpoints';
import { ProductsContainer } from '../products/products.styles';
import * as S from './profile-info.styles';
import { ProductsTitle } from '../products/products.styles';
import { useGetAdvertsQuery } from '../../services/adverts';
import Products from '../products/Products';
import { baseUrl } from '../../api/AdvApi';
import { Loader } from '../loader/Loader';
import useGetWindowWidth from '../../hooks/WindowWidth';

type User = {
  userId: number;
};
const SellerProfileInfo = ({ userId }: User) => {
  const { data: adverts, isLoading } = useGetAdvertsQuery(null);

  const userAdverts = adverts?.filter((adv) => adv?.user_id === userId);

  const screenWidth = useGetWindowWidth();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductsContainer>
          <S.ProfileGreetingsContainer>
            {screenWidth.width < MOBILE && (
              <Link to="/">
                <img src="/img/vector.svg" />
              </Link>
            )}
            <S.ProfileIntoTitle>Профиль продавца</S.ProfileIntoTitle>
          </S.ProfileGreetingsContainer>

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

                    <S.SellerAddInfo>
                      Продает товары с {userAdverts[0]?.user?.sells_from}
                    </S.SellerAddInfo>
                    {userAdverts[0]?.user?.phone && (
                      <S.SaveButton>{userAdverts[0]?.user?.phone}</S.SaveButton>
                    )}
                  </>
                )}
              </S.InputBlock>

              {/* <S.SettingsBlockInputs></S.SettingsBlockInputs> */}
            </S.ProfileSettingsBlock>
          </S.ProfileSettings>
          <ProductsTitle>Товары продавца</ProductsTitle>
          <Products products={userAdverts} />
        </ProductsContainer>
      )}
    </>
  );
};

export default SellerProfileInfo;
