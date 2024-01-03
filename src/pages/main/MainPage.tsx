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
import Loader from '../../components/loader/Loader';

const MainPage = () => {
  const { data: products, isLoading } = useGetAdvertsQuery(null);

  return (
    <div>
      <Header namePage={MAIN_PAGE} />
      <Navigation namePage={MAIN_PAGE} />
      <Container>
        <ProductsContainer>
          <ProductsTitle>Объявления</ProductsTitle>
          {isLoading ? <Loader /> : <Products products={products} />}
        </ProductsContainer>
      </Container>
      <MobileFooter />
    </div>
  );
};

export default MainPage;
