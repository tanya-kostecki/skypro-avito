import React from 'react'
import Header, { MAIN_PAGE } from '../../components/header/Header'
import Navigation from '../../components/navigation/Navigation'
import Products from '../../components/products/Products'

const MainPage = () => {
  return (
    <div>
      <Header namePage={MAIN_PAGE}/>
      <Navigation namePage={MAIN_PAGE}/>
      <Products />
    </div>
  )
}

export default MainPage