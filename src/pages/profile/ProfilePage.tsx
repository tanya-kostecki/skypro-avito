import React from 'react';
import Header from '../../components/header/Header';
import { PROFILE_PAGE } from '../../constants/pagesConst';
import Navigation from '../../components/navigation/Navigation';
import ProfileInfo from '../../components/profile-info/ProfileInfo';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';
import { useGetCurrentUserQuery } from '../../services/user';

const ProfilePage = () => {
  const auth = localStorage.getItem('auth');
  const { data: user } = useGetCurrentUserQuery(null);

  return (
    <>
      {auth && (
        <div>
          <Header />
          <Navigation namePage={PROFILE_PAGE} />
            <Container>
              {user && <ProfileInfo user={user} />}
            </Container>
          <MobileFooter />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
