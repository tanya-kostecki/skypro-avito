import React from 'react';
import MainPage from './pages/main/MainPage';
import ProfilePage from './pages/profile/ProfilePage';
import AuthPage from './pages/authorization/AuthPage';
import SellerProfilePage from './pages/seller-profile/SellerProfilePage';
import { Routes, Route } from 'react-router-dom';
import AdvPage from './pages/adv/AdvPage';
import useGetWindowWidth from './hooks/WindowWidth';
import AdvSettingsPage from './pages/adv/AdvSettingsPage';
import ReviewsPage from './pages/reviews/ReviewsPage';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import NotFound from './pages/not-found/PageNotFound';
import { MOBILE } from './constants/breakpoints';
import AddAdvPage from './pages/add-new-adv/AddAdvPage';

const AppRoutes = () => {
  const screenSize = useGetWindowWidth();

  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/login" element={<AuthPage isLoginMode={true} />}></Route>
      <Route path="/signup" element={<AuthPage isLoginMode={false} />}></Route>
      <Route path="/adv/:id" element={<AdvPage />}></Route>
      <Route path="/seller-profile/:id" element={<SellerProfilePage />}></Route>
      <Route path="*" element={<NotFound />}></Route>

      <Route element={<ProtectedRoute redirectPath="/login" />}>
        <Route path="/profile" element={<ProfilePage />}></Route>
        {screenSize.width < MOBILE ? (
        <Route path="/adv-settings/:id" element={<AdvSettingsPage />}></Route>
      ) : null}
        {screenSize.width < MOBILE ? (
        <Route path="/add-new-adv" element={<AddAdvPage />}></Route>
      ) : null}
      </Route>
      {screenSize.width < MOBILE ? (
        <Route path="/reviews/:id" element={<ReviewsPage />}></Route>
      ) : null}
    </Routes>
  );
};

export default AppRoutes;
