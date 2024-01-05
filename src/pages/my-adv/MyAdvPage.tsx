import React from 'react';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import { Container } from '../../globalStyles/GlobalStyles';
import AdvInfo from '../../components/adv-info/AdvInfo';
import { MY_ADV } from '../../constants/pagesConst';
import MobileFooter from '../../components/footer/MobileFooter';

const MyAdvPage = () => {
  const auth = localStorage.getItem('auth')

  return (
    <>
      {auth && (
        <div>
          <Header />
          <Navigation namePage={MY_ADV} />
          <Container>
            <AdvInfo namePage={MY_ADV} />
          </Container>
          <MobileFooter />
        </div>
      )}
    </>
  );
};

export default MyAdvPage;
