import React from 'react';
import './seller.css'
import Footer from '../../components/footer/Footer';
import ProductItem from '../../components/products/ProductItem';
import AuthorizedHeader from '../../components/authorized-header/AuthorizedHeader';
import GoToMain from '../../components/navigation/GoToMain';
import SellerInfo from '../../components/seller-profile-info/SellerInfo';

const SellerProfilePage = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <AuthorizedHeader/>

        <main className="seller-main">
          <div className="seller-main__container">
            <div className="seller-main__center-block">
              <GoToMain/>

              <h2 className="seller-main__h2">Профиль продавца</h2>

              <SellerInfo/>

              <h3 className="seller-main__title ">Товары продавца</h3>
            </div>
            <div className="seller-main__content">
              <div className="content__cards seller__cards">
               <ProductItem/>                
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default SellerProfilePage;
