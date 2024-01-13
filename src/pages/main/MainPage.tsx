import React from 'react';
import Header from '../../components/header/Header';
import { MAIN_PAGE } from '../../constants/pagesConst';
import Navigation from '../../components/navigation/Navigation';
import Products from '../../components/products/Products';
import { Container } from '../../globalStyles/GlobalStyles';
import {
  ProductsContainer,
  ProductsTitle,
} from '../../components/products/products.styles';
import MobileFooter from '../../components/footer/MobileFooter';
import { useGetAdvertsQuery } from '../../services/adverts';
import { Loader } from '../../components/loader/Loader';

const MainPage = () => {
  const { data: products, isLoading } = useGetAdvertsQuery(null);

  return (
    <div>
      <Header />
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
