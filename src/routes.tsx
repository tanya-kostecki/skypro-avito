import React, { useContext } from 'react';
import MainPage from './pages/main/MainPage';
import ProfilePage from './pages/profile/ProfilePage';
import AuthPage from './pages/authorization/AuthPage';
import SellerProfilePage from './pages/seller-profile/SellerProfilePage';
import { Routes, Route } from 'react-router-dom';
import AdvPage from './pages/adv/AdvPage';
import MyAdvPage from './pages/my-adv/MyAdvPage';
import useGetWindowWidth from './hooks/WindowWidth';
import AdvSettingsPage from './pages/adv/AdvSettingsPage';
import ReviewsPage from './pages/reviews/ReviewsPage';
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import { UserContext } from './App';

const AppRoutes = () => {
  const screenSize = useGetWindowWidth();
  const isUser = useContext(UserContext);
  console.log('isUser', isUser)
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/login" element={<AuthPage isLoginMode={true} />}></Route>
      <Route path="/signup" element={<AuthPage isLoginMode={false} />}></Route>
      <Route path="/adv/:id" element={<AdvPage />}></Route>
      <Route path="/seller-profile/:id" element={<SellerProfilePage />}></Route>

      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(isUser)} redirectPath="/login" />
        }
      >
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/my-adv" element={<MyAdvPage />}></Route>
      </Route>

      {screenSize.width < 481 ? (
        <Route path="/adv-settings" element={<AdvSettingsPage />}></Route>
      ) : null}
      {screenSize.width < 481 ? (
        <Route path="/reviews" element={<ReviewsPage />}></Route>
      ) : null}
    </Routes>
  );
};

export default AppRoutes;
