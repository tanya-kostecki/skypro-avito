import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import { ADV_PAGE } from '../../constants/pagesConst';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';
import AddNewAdv from '../../components/add-adv/addNewAdv';

const AddAdvPage = () => {
  return (
    <div>
      <Navigation namePage={ADV_PAGE} />
      <Container>
        <AddNewAdv />
      </Container>
      <MobileFooter />
    </div>
  );
};

export default AddAdvPage;
