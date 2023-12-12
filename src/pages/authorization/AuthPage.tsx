import React from "react";
import { Link, NavLink ,useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";

interface Props {
    isLoginMode?: boolean;
    email?: string;
    password?: string;
}

function AuthPage({ isLoginMode = false }: Props) {
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [username, setUsername] = useState('');

  const [isAuthProcess, setIsAuthProcess] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async ({ email, password }: Props) => {
    if(!email) {
      setError('Введите почту')
      return
    } else if(!password) {
      setError('Введите пароль')
    } else {
      try {
        setIsAuthProcess(true)
        navigate('/')
      } catch (error) {
        setError('error')
      } finally {
        setIsAuthProcess(false)
      }
    }
  };

  const handleRegister = async () => {
    if(!username) {
      setError('Введите имя пользователя')
      return
    } else if(!email) {
      setError('Введите почту')
      return
    } else if(!password) {
      setError('Введите пароль')
      return
    } else if(!repeatPassword) {
      setError('Ввелите пароль повторно')
      return
    } else if (repeatPassword !== password) {
      setError('Указанные пароли не совпадают')
      return
    } else if (password.length < 8) {
      setError('Пароль должен быть не менее 8-ми символов')
      return
    } else {
      try {
        setIsAuthProcess(true)
        navigate('/')
      } catch (error) {
        setError('error')
      } finally {
        setIsAuthProcess(false)
      }
    }
  };

  useEffect(() => {
    setError('');
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isAuthProcess} onClick={() => handleLogin({ email, password })}>
                {isAuthProcess ? 'Выполняется вход...' : 'Войти'}
              </S.PrimaryButton>
              <NavLink to="/signup" style={{'textDecoration': 'none'}}>
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </NavLink>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Имя"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton disabled={isAuthProcess} onClick={handleRegister}>
                {isAuthProcess ? 'Выполняется регистрация...' : 'Зарегистрироваться'}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
export default AuthPage