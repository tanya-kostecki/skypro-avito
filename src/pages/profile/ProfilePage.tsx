import React from 'react';
import './profile.css'
import Footer from '../../components/footer/Footer';
import ProductItem from '../../components/products/ProductItem';
import AuthorizedHeader from '../../components/authorized-header/AuthorizedHeader';
import GoToMain from '../../components/navigation/GoToMain';
import ProfileInfo from '../../components/profile-info/ProfileInfo';
import SellerInfo from '../../components/seller-profile-info/SellerInfo';
import { PROFILE_PAGE, SELLER_PAGE } from '../../constants/pagesConst';

const ProfilePage = ({ namePage }: Page) => {
  return (
    <div className="wrapper">
      <div className="container">
        <AuthorizedHeader />
        <main className="seller-main">
          <div className="seller-main__container">
            {namePage === PROFILE_PAGE && (
              <div className="seller-main__center-block">
                <GoToMain />
                <h2 className="main__h2">Здравствуйте, Антон!</h2>
                <ProfileInfo />
                <h3 className="seller-main__title title">Мои товары</h3>
              </div>
            )}
            {namePage === SELLER_PAGE && (
              <div className="seller-main__center-block">
                <GoToMain />
                <h2 className="seller-main__h2">Профиль продавца</h2>
                <SellerInfo />
                <h3 className="seller-main__title ">Товары продавца</h3>
              </div>
            )}

            <div className="seller-main__content">
              <div className="content__cards cards">
                <ProductItem />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
