import React from 'react';
import './signin.css'
import LoginForm from '../../../components/auth-components/login-form/LoginForm';
import Footer from '../../../components/footer/Footer';

const SignIn = () => {
  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="signin__block">
          <LoginForm/>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default SignIn;
