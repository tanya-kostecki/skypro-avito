import React from 'react';
import './register.css'

const RegisterForm = () => {
  return (
    <form className="signup__form-login" id="formLogUp" action="#">
      <div className="signup__logo">
        <img src="../../img/logo_modal.png" alt="logo" />
      </div>
      <input
        className="signup__input login"
        type="text"
        name="login"
        id="loginReg"
        placeholder="email"
      />
      <input
        className="signup__input password-first"
        type="password"
        name="password"
        id="passwordFirst"
        placeholder="Пароль"
      />
      <input
        className="signup__input password-double"
        type="password"
        name="password"
        id="passwordSecond"
        placeholder="Повторите пароль"
      />
      <input
        className="signup__input first-name"
        type="text"
        name="first-name"
        id="first-name"
        placeholder="Имя (необязательно)"
      />
      <input
        className="signup__input first-last"
        type="text"
        name="first-last"
        id="first-last"
        placeholder="Фамилия (необязательно)"
      />
      <input
        className="signup__input city"
        type="text"
        name="city"
        id="city"
        placeholder="Город (необязательно)"
      />
      <button className="signup__btn-signup-ent" id="SignUpEnter">
        <a href="../index.html">Зарегистрироваться</a>{' '}
      </button>
    </form>
  );
};

export default RegisterForm;
