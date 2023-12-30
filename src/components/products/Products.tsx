import React from 'react';
import * as S from './products.styles';
import ProductItem from './ProductItem';
import { IAdv } from '../../types';
import { formatDate } from '../../helpers/FormatDate';

type PropsArr = {
  data: IAdv[];
};
const Products = ({ data }: PropsArr) => {
  return (
    <S.ProductsMain>
      {data?.map((product) => (
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
  );
};

export default Products;
