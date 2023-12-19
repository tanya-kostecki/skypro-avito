import React from 'react'
import MainPage from './pages/main/MainPage'
import ProfilePage from './pages/profile/ProfilePage'
import SellerProfilePage from './pages/seller-profile/SellerProfilePage';
import { Routes, Route } from 'react-router-dom'
import MyAdvPage from './pages/my-adv/MyAdvPage';
import ArticlePage from './pages/article/ArticlePage';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/seller-profile' element={<SellerProfilePage/>}></Route>
        <Route path='/adv' element={<ArticlePage/>}></Route>
        <Route path='/my-adv' element={<MyAdvPage/>}></Route>
    </Routes>
  )
}

export default AppRoutes