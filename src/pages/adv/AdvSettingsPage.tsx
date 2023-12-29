import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import { ADV_PAGE } from '../../constants/pagesConst';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';


const AdvSettingsPage = () => {
  return (
    <div>
      <Navigation namePage={ADV_PAGE} />
      <Container>
        {/* <Navigation namePage={ADV_PAGE} /> */}
        <div style={{ position: 'relative', top: '60px' }}>
          AdvSettings Page
        </div>
      </Container>
      <MobileFooter />
    </div>
  );
};

export default AdvSettingsPage;
