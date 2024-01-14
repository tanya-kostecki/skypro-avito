import React, { useEffect } from 'react';
import * as S from './navigation.styles';
import { MAIN_PAGE } from '../../constants/pagesConst';
import { NavLink } from 'react-router-dom';
import { Page } from '../../types';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Filters, setFilteredAdverts, setFilters } from '../../store/slices/AdvertSlice';
import { useGetAdvertsQuery } from '../../services/adverts';
import useGetWindowWidth from '../../hooks/WindowWidth';
import { MOBILE } from '../../constants/breakpoints';

const Navigation = ({ namePage }: Page) => {
  const filters = useAppSelector((state: { adverts: { filters: Filters; }; }) => state.adverts.filters);
  const dispatch = useAppDispatch();

  const search = (value: string) => {
    dispatch(setFilters({ ...filters, searchValue: value, status: true }));
  };

  const { data: products } = useGetAdvertsQuery(null);

  useEffect(() => {
    if (products) {
      let filteredAdverts = [...products];

      if (filters.searchValue.length) {
        filteredAdverts = [
          ...products.filter((product: { title: string; }) =>
            product.title
              .toLowerCase()
              .includes(filters.searchValue.toLowerCase()),
          ),
        ];

        dispatch(setFilteredAdverts(filteredAdverts))
      }
    }
  }, [filters]);

  const screenSize = useGetWindowWidth();

  return (
    <S.SearchBlockContainer>
      <S.SearchBlock>
        <S.SearchBlockLogo href="/">
          <S.SearchLogo
            className="search__logo-img"
            src="/img/logo.png"
            alt="logo"
          />
        </S.SearchBlockLogo>
        <S.MobileLogo href="/">
          <S.SearchLogoMobile
            className="search__logo-img"
            src="/img/logo-mob.png"
            alt="logo"
          />
        </S.MobileLogo>

        {namePage === MAIN_PAGE ? (
          <>
            <S.SearchBlockInput
              placeholder="Поиск по объявлениям"
              onChange={(event) => search(event.target.value)}
            ></S.SearchBlockInput>
          </>
        ) : (
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <S.BackToMainBtn>Вернуться на главную</S.BackToMainBtn>
          </NavLink>
        )}
        {screenSize.width <= MOBILE && <img src="/img/logout.svg" style={{ color: 'white'}}></img>}
      </S.SearchBlock>
    </S.SearchBlockContainer>
  );
};

export default Navigation;
