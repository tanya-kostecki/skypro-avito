import React from 'react'
import Header, { MAIN_PAGE } from '../../components/header/Header'
import Navigation from '../../components/navigation/Navigation'
import Products from '../../components/products/Products'
import { Container } from '../../globalStyles/GlobalStyles';

const MainPage = () => {
  return (
    <div>
      <Header namePage={MAIN_PAGE} />
      <Container>
        <Navigation namePage={MAIN_PAGE} />
        <Products />
      </Container>
    </div>
  );
}

export default MainPage