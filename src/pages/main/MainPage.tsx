import React from 'react'
import './main.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProductItem from '../../components/products/ProductItem';
import Search from '../../components/search/Search';

const MainPage = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
        <main className="main">
          <Search/>
          <div className="main__container">
            <h2 className="main__h2">Объявления</h2>
            <div className="main__content">
              <div className="content__cards cards">
                <ProductItem/>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage