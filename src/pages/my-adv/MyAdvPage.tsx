import React from 'react';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import { Container } from '../../globalStyles/GlobalStyles';
import AdvInfo from '../../components/adv/AdvInfo';
import { MY_ADV } from '../../constants/pagesConst';

const MyAdvPage = () => {
  return (
    <div>
      <Header namePage={MY_ADV} />
      <Container>
        <Navigation namePage={MY_ADV}/>
        <AdvInfo namePage={MY_ADV}/>
      </Container>
    </div>
  );
};

export default MyAdvPage;
