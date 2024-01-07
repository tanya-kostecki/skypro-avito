import React from 'react';
import Header from '../../components/header/Header';
import { PROFILE_PAGE } from '../../constants/pagesConst';
import Navigation from '../../components/navigation/Navigation';
import ProfileInfo from '../../components/profile-info/ProfileInfo';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';
import { useGetCurrentUserQuery } from '../../services/user';
import { Loader } from '../../components/loader/loader.styles';

const ProfilePage = () => {
  const auth = localStorage.getItem('auth');
  const { data: currentUser, isLoading } = useGetCurrentUserQuery(null);

  return (
    <>
      {auth && (
        <div>
          <Header />
          <Navigation namePage={PROFILE_PAGE} />
          {isLoading ? (
            <Loader />
          ) : (
            <Container>
              {currentUser && <ProfileInfo user={currentUser} />}
            </Container>
          )}
          <MobileFooter />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
