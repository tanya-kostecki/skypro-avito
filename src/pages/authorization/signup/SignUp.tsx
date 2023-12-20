import React from 'react';
import './signup.css'
import RegisterForm from '../../../components/auth-components/reigster-form/RegisterForm';
import Footer from '../../../components/footer/Footer';

const SignUp = () => {
  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="signup__block">
          <RegisterForm/>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default SignUp;
