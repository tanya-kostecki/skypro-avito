import React from 'react'
import Header from '../../components/header/Header'
import { PROFILE_PAGE } from '../../constants/pagesConst'
import Navigation from '../../components/navigation/Navigation'
import ProfileInfo from '../../components/profile-info/ProfileInfo'
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';

const ProfilePage = () => {
  return (
    <div>
      <Header namePage={PROFILE_PAGE} />
      <Navigation namePage={PROFILE_PAGE} />
      <Container>
        <ProfileInfo namePage={PROFILE_PAGE} />
      </Container>
      <MobileFooter/>
    </div>
  );
}

export default ProfilePage