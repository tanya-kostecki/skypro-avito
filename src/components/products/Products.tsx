import React from 'react';
import * as S from './products.styles';
import ProductItem from './ProductItem';
import { products } from '../../constants/productsConst';

const Products = () => {
  return (
    <S.ProductsContainer>
      <S.ProductsTitle>Объявления</S.ProductsTitle>
      <S.ProductsMain>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            descriptionTitle={product.descriptionTitle}
            price={product.price}
            city={product.city}
            date={product.date}
          />
        ))}
      </S.ProductsMain>
    </S.ProductsContainer>
  );
};

export default Products;
