import React from 'react';
import Header from '../../components/header/Header';
import { SELLER_PAGE } from '../../constants/pagesConst';
import Navigation from '../../components/navigation/Navigation';
import ProfileInfo from '../../components/profile-info/ProfileInfo';
import { Container } from '../../globalStyles/GlobalStyles';

const SellerProfilePage = () => {
  return (
    <div>
      <Header namePage={SELLER_PAGE} />
      <Container>
        <Navigation namePage={SELLER_PAGE} />
        <ProfileInfo namePage={SELLER_PAGE} />
      </Container>
    </div>
  );
};

export default SellerProfilePage;
