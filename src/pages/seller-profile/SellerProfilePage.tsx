import React from 'react';
import Header from '../../components/header/Header';
import { SELLER_PAGE } from '../../constants/pagesConst';
import Navigation from '../../components/navigation/Navigation';
import ProfileInfo from '../../components/profile-info/ProfileInfo';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';
import { useParams } from 'react-router-dom';

const SellerProfilePage = () => {
  const params = useParams();
  const userId = Number(params.id);
  
  return (
    <div>
      <Header namePage={SELLER_PAGE} />
      <Navigation namePage={SELLER_PAGE} />
      <Container>
        <ProfileInfo namePage={SELLER_PAGE} userId={userId} />
      </Container>
      <MobileFooter />
    </div>
  );
};

export default SellerProfilePage;
