import React, { useEffect, useState } from 'react';
import * as S from './products.styles';
import ProductItem from './ProductItem';
import { getAdverts } from '../../api/AdvApi';
import { IAdv } from '../../types';
// import { products } from '../../constants/productsConst';

const Products = () => {
  const [products, setProducts] = useState<IAdv[]>([])

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await getAdverts();
        setProducts(response)
      } catch(error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  console.log(products)

  return (
    <S.ProductsContainer>
      <S.ProductsTitle>Объявления</S.ProductsTitle>
      <S.ProductsMain>
        {products?.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            // description={product.description}
            price={product.price}
            images={product.images}
            // city={product.city}
            created_on={product.created_on}
            // images={product.images[0]}
          />
        ))}
      </S.ProductsMain>
    </S.ProductsContainer>
  );
};

export default Products;
