import React from 'react'
import MainPage from './pages/main/MainPage'
import ProfilePage from './pages/profile/ProfilePage'
import { Routes, Route } from 'react-router-dom'
import ArticlePage from './pages/article/ArticlePage';
import { ADV_PAGE, MY_ADV, PROFILE_PAGE, SELLER_PAGE } from './constants/pagesConst';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/profile' element={<ProfilePage namePage={PROFILE_PAGE}/>}></Route>
        <Route path='/seller-profile' element={<ProfilePage namePage={SELLER_PAGE}/>}></Route>
        <Route path='/adv' element={<ArticlePage namePage={ADV_PAGE}/>}></Route>
        <Route path='/my-adv' element={<ArticlePage namePage={MY_ADV}/>}></Route>
    </Routes>
  )
}

export default AppRoutes