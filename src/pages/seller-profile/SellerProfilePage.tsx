import React from 'react';
import Header from '../../components/header/Header';
import { SELLER_PAGE } from '../../constants/pagesConst';
import Navigation from '../../components/navigation/Navigation';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';
import { useParams } from 'react-router-dom';
import SellerProfileInfo from '../../components/profile-info/SellerProfileInfo';

const SellerProfilePage = () => {
  const params = useParams();
  const userId = Number(params.id);
  
  return (
    <div>
      <Header />
      <Navigation namePage={SELLER_PAGE} />
      <Container>
        <SellerProfileInfo userId={userId}/>
      </Container>
      <MobileFooter />
    </div>
  );
};

export default SellerProfilePage;
