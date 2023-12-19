import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import { Container } from '../../globalStyles/GlobalStyles';
import AdvInfo from '../../components/adv-info/AdvInfo';
import { MY_ADV } from '../../constants/pagesConst';

const MyAdvPage = () => {
  return (
    <div>
      <Container>
        <Navigation namePage={MY_ADV}/>
        <AdvInfo namePage={MY_ADV}/>
      </Container>
    </div>
  );
};

export default MyAdvPage;
