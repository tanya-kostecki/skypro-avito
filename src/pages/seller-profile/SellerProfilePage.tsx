import React from 'react';
import Header from '../../components/header/Header';
import { SELLER_PAGE } from '../../constants/pagesConst';
import Navigation from '../../components/navigation/Navigation';
import ProfileInfo from '../../components/profile-info/ProfileInfo';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../footer/MobileFooter';

const SellerProfilePage = () => {
  return (
    <div>
      <Header namePage={SELLER_PAGE} />
      <Navigation namePage={SELLER_PAGE} />
      <Container>
        {/* <Navigation namePage={SELLER_PAGE} /> */}
        <ProfileInfo namePage={SELLER_PAGE} />
      </Container>
      <MobileFooter/>
    </div>
  );
};

export default SellerProfilePage;
