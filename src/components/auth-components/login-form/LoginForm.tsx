import React from 'react';
import './login.css'

const LoginForm = () => {
  return (
    <form className="signin__form-login" id="formLogIn" action="#">
      <div className="signin__logo">
        <img src="../../img/logo_modal.png" alt="logo" />
      </div>
      <input
        className="signin__input login"
        type="text"
        name="login"
        id="formlogin"
        placeholder="email"
      />
      <input
        className="signin__input password"
        type="password"
        name="password"
        id="formpassword"
        placeholder="Пароль"
      />
      <button className="signin__btn-enter" id="btnEnter">
        <a href="../index.html">Войти</a>{' '}
      </button>
      <button className="signin__btn-signup" id="btnSignUp">
        <a href="signup.html">Зарегистрироваться</a>{' '}
      </button>
    </form>
  );
};

export default LoginForm;
