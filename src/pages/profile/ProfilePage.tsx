import React from 'react';
import Footer from '../../components/footer/Footer';
import ProductItem from '../../components/products/ProductItem';
import AuthorizedHeader from '../../components/authorized-header/AuthorizedHeader';
import GoToMain from '../../components/navigation/GoToMain';
import ProfileInfo from '../../components/profile-info/ProfileInfo';

const ProfilePage = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <AuthorizedHeader/>
        <main className="seller-main">
          <div className="seller-main__container">
            <div className="seller-main__center-block">
             <GoToMain/>

              <h2 className="main__h2">Здравствуйте, Антон!</h2>

              <ProfileInfo/>

              <h3 className="seller-main__title title">Мои товары</h3>
            </div>
            <div className="seller-main__content">
              <div className="content__cards cards">
                <ProductItem/>
                
              </div>
            </div>
          </div>
        </main>

        <Footer/>
      </div>
    </div>
  );
};

export default ProfilePage;
