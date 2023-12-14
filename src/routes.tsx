import React from 'react'
import MainPage from './pages/main/MainPage'
import ProfilePage from './pages/profile/ProfilePage'
import AuthPage from './pages/authorization/AuthPage'
import SellerProfilePage from './pages/seller-profile/SellerProfilePage';
import { Routes, Route } from 'react-router-dom'
import AdvPage from './pages/adv/AdvPage';
import MyAdvPage from './pages/my-adv/MyAdvPage';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/login' element={<AuthPage isLoginMode={true}/>}></Route>
        <Route path='/signup' element={<AuthPage isLoginMode={false}/>}></Route>
        <Route path='/seller-profile' element={<SellerProfilePage/>}></Route>
        <Route path='/adv' element={<AdvPage/>}></Route>
        <Route path='/my-adv' element={<MyAdvPage/>}></Route>
    </Routes>
  )
}

export default AppRoutes