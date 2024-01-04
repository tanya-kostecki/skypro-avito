import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import { Container } from '../../globalStyles/GlobalStyles';
import AdvInfo from '../../components/adv-info/AdvInfo';
import { MY_ADV } from '../../constants/pagesConst';
import MobileFooter from '../../components/footer/MobileFooter';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const MyAdvPage = () => {
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
          <Navigation namePage={MY_ADV} />
          <Container>
            <AdvInfo namePage={MY_ADV} />
          </Container>
          <MobileFooter />
        </div>
      )}
    </>
  );
};

export default MyAdvPage;
