import React, { useState, useEffect} from 'react'
import Header, { MAIN_PAGE } from '../../components/header/Header'
import Navigation from '../../components/navigation/Navigation'
import Products from '../../components/products/Products'
import { Container } from '../../globalStyles/GlobalStyles';
import {
  ProductsContainer,
  ProductsTitle,
} from '../../components/products/products.styles';
import MobileFooter from '../../components/footer/MobileFooter';
import { getAdverts } from '../../api/AdvApi';
import { IAdv } from '../../types';

const MainPage = () => {
  const [products, setProducts] = useState<IAdv[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAdverts();
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header namePage={MAIN_PAGE} />
      <Navigation namePage={MAIN_PAGE} />
      <Container>
        <ProductsContainer>
          <ProductsTitle>Объявления</ProductsTitle>
          <Products data={products}/>
        </ProductsContainer>
      </Container>
      <MobileFooter />
    </div>
  );
}

export default MainPage