import React from "react";
import { Link, NavLink ,useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import MobileFooter from "../../components/footer/MobileFooter";
import Navigation from "../../components/navigation/Navigation";
import { AUTH_PAGE } from "../../constants/pagesConst";
import useGetWindowWidth from "../../hooks/WindowWidth";
import { Props } from "../../types";
import {
  useGetAuthLoginMutation,
  useGetAuthRegistrationMutation,
} from '../../services/user';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setToken } from '../../store/slices/TokenSlice';
import { MOBILE } from "../../constants/breakpoints";

function AuthPage({ isLoginMode = false }: Props) {
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setUsername] = useState('');
  const [surname, setUserLastName] = useState('');
  const [city, setUserCity] = useState('');

  const [isAuthProcess, setIsAuthProcess] = useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  // eslint-disable-next-line no-empty-pattern
  const [RegisterApi, {}] = useGetAuthRegistrationMutation();

  // eslint-disable-next-line no-empty-pattern
  const [LoginApi, {}] = useGetAuthLoginMutation();

  const handleLogin = async ({ email, password }: Props) => {
    if (!email) {
      setError('Введите почту');
      return;
    } else if (!password) {
      setError('Введите пароль');
    } else {
      try {
        setIsAuthProcess(true);
        await LoginApi({ email, password })
          .unwrap()
          .then((data: { access_token: string; refresh_token: string }) => {
            const { access_token, refresh_token } = data;
            dispatch(
              setToken({
                accessToken: access_token,
                refreshToken: refresh_token,
              }),
            );
            navigate('/');
          });
      } catch (error) {
        setError('Непривильный логин или пароль');
      } finally {
        setIsAuthProcess(false);
      }
    }
  };

  const handleRegister = async () => {
    if (!name) {
      setError('Введите имя пользователя');
      return;
    } else if (!email) {
      setError('Введите почту');
      return;
    } else if (!password) {
      setError('Введите пароль');
      return;
    } else if (!repeatPassword) {
      setError('Ввелите пароль повторно');
      return;
    } else if (repeatPassword !== password) {
      setError('Указанные пароли не совпадают');
      return;
    } else if (password.length < 8) {
      setError('Пароль должен быть не менее 8-ми символов');
      return;
    } else {
      try {
        setIsAuthProcess(true);
        await RegisterApi({ email, password, name, city, surname })
          .unwrap()
          .then((data) => {
            console.log(data);
            navigate('/login');
          });
      } catch (error) {
        setError('error');
      } finally {
        setIsAuthProcess(false);
      }
    }
  };

  useEffect(() => {
    setError('');
  }, [isLoginMode, email, password, repeatPassword]);

  const screenSize = useGetWindowWidth();

  return (
    <S.PageContainer>
      {screenSize.width < MOBILE ? <Navigation namePage={AUTH_PAGE} /> : null}

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
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                disabled={isAuthProcess}
                onClick={() => handleLogin({ email, password })}
              >
                {isAuthProcess ? 'Выполняется вход...' : 'Войти'}
              </S.PrimaryButton>
              <NavLink to="/signup" style={{ textDecoration: 'none' }}>
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
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Имя"
                value={name}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Фамилия (необязательно)"
                value={surname}
                onChange={(event) => {
                  setUserLastName(event.target.value);
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Город (необязательно)"
                value={city}
                onChange={(event) => {
                  setUserCity(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                disabled={isAuthProcess}
                onClick={handleRegister}
              >
                {isAuthProcess
                  ? 'Выполняется регистрация...'
                  : 'Зарегистрироваться'}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
      <MobileFooter />
    </S.PageContainer>
  );
}
export default AuthPage