import React from 'react';
import * as S from './products.styles';
import ProductItem from './ProductItem';
import { IAdv } from '../../types';
import { formatDate } from '../../helpers/FormatDate';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Filters } from '../../store/slices/AdvertSlice';

type PropsArr = {
  products: IAdv[] | undefined;
};
const Products = ({ products }: PropsArr) => {
  const filters = useAppSelector(
    (state: { adverts: { filters: Filters } }) => state.adverts.filters,
  );
  const filteredAdverts = useAppSelector(
    (state) => state.adverts.filteredAdverts,
  );
  
  return (
    <>
    {filters.status && filters.searchValue.length ? (
      <S.ProductsMain>
      {filteredAdverts?.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          images={product.images}
          user={product.user}
          created_on={formatDate(product.created_on)}
        />
      ))}
    </S.ProductsMain>
    ) : (
      <S.ProductsMain>
      {products?.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          images={product.images}
          user={product.user}
          created_on={formatDate(product.created_on)}
        />
      ))}
    </S.ProductsMain>
    )}
    </>
  );
};

export default Products;
