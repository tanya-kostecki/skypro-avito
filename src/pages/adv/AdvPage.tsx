import React from 'react';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import AdvInfo from '../../components/adv-info/AdvInfo';
import { ADV_PAGE } from '../../constants/pagesConst';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';
import { useParams } from 'react-router-dom';

const AdvPage = () => {
  const params = useParams()
  const adId = Number(params.id)

  return (
    <div>
      <Header />
      <Navigation namePage={ADV_PAGE} />
      <Container>
        <AdvInfo namePage={ADV_PAGE} adId={adId}/>
      </Container>
      <MobileFooter/>
    </div>
  );
};

export default AdvPage;
