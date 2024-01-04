import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/Header';
import { PROFILE_PAGE } from '../../constants/pagesConst';
import Navigation from '../../components/navigation/Navigation';
import ProfileInfo from '../../components/profile-info/ProfileInfo';
import { Container } from '../../globalStyles/GlobalStyles';
import MobileFooter from '../../components/footer/MobileFooter';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { isUser, setIsUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsUser(true);
    } else {
      setIsUser(false);
      navigate('/login');
    }
  }, []);

  return (
    <>
      {isUser && (
        <div>
          <Header />
          <Navigation namePage={PROFILE_PAGE} />
          <Container>
            <ProfileInfo namePage={PROFILE_PAGE} />
          </Container>
          <MobileFooter />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
