import React from 'react';
import Header, { MAIN_PAGE } from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import Products from '../../components/products/Products';
import { Container } from '../../globalStyles/GlobalStyles';
import {
  ProductsContainer,
  ProductsTitle,
} from '../../components/products/products.styles';
import MobileFooter from '../../components/footer/MobileFooter';
import { useGetAdvertsQuery } from '../../services/adverts';

const MainPage = () => {
  const { data: products } = useGetAdvertsQuery(null);

  return (
    <div>
      <Header namePage={MAIN_PAGE} />
      <Navigation namePage={MAIN_PAGE} />
      <Container>
        <ProductsContainer>
          <ProductsTitle>Объявления</ProductsTitle>
          <Products products={products} />
        </ProductsContainer>
      </Container>
      <MobileFooter />
    </div>
  );
};

export default MainPage;
