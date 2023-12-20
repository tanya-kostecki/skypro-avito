import React from 'react'
import MainPage from './pages/main/MainPage'
import ProfilePage from './pages/profile/ProfilePage'
import { Routes, Route } from 'react-router-dom'
import ArticlePage from './pages/article/ArticlePage';
import { ADV_PAGE, MY_ADV, PROFILE_PAGE, SELLER_PAGE } from './constants/pagesConst';
import SignIn from './pages/authorization/signin/SignIn';
import SignUp from './pages/authorization/signup/SignUp';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/profile' element={<ProfilePage namePage={PROFILE_PAGE}/>}></Route>
        <Route path='/seller-profile' element={<ProfilePage namePage={SELLER_PAGE}/>}></Route>
        <Route path='/adv' element={<ArticlePage namePage={ADV_PAGE}/>}></Route>
        <Route path='/my-adv' element={<ArticlePage namePage={MY_ADV}/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
  )
}

export default AppRoutes