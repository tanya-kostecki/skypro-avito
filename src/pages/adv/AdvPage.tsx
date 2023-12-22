import React from 'react';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import AdvInfo from '../../components/adv-info/AdvInfo';
import { ADV_PAGE } from '../../constants/pagesConst';
import { Container } from '../../globalStyles/GlobalStyles';

const AdvPage = () => {
  return (
    <div>
      <Header namePage={ADV_PAGE} />
      <Navigation namePage={ADV_PAGE} />
      <Container>
        {/* <Navigation namePage={ADV_PAGE} /> */}
        <AdvInfo namePage={ADV_PAGE}/>
      </Container>
    </div>
  );
};

export default AdvPage;
