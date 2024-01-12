import React from 'react';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import AdvInfo from '../../components/adv-info/AdvInfo';
import { ADV_PAGE } from '../../constants/pagesConst';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';

const AdvPage = () => {
  return (
    <div>
      <Header />
      <Navigation namePage={ADV_PAGE} />
      <Container>
        <AdvInfo />
      </Container>
      <MobileFooter/>
    </div>
  );
};

export default AdvPage;
