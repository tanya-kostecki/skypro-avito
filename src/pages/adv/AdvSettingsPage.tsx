import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import { ADV_PAGE } from '../../constants/pagesConst';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';
import AdvSettings from '../../components/modals/adv-settings/AdvSettings';
import { useParams } from 'react-router-dom';


const AdvSettingsPage = () => {
  const params = useParams();
  const advertId = Number(params.id);

  return (
    <div>
      <Navigation namePage={ADV_PAGE} />
      <Container>
        <AdvSettings advertId={advertId}/>
      </Container>
      <MobileFooter />
    </div>
  );
};

export default AdvSettingsPage;
