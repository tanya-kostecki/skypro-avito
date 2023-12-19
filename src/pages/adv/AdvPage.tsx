import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import AdvInfo from '../../components/adv-info/AdvInfo';
import { ADV_PAGE } from '../../constants/pagesConst';
import { Container } from '../../globalStyles/GlobalStyles';

const AdvPage = () => {
  return (
    <div>
      <Container>
        <Navigation namePage={ADV_PAGE} />
        <AdvInfo namePage={ADV_PAGE}/>
      </Container>
    </div>
  );
};

export default AdvPage;
