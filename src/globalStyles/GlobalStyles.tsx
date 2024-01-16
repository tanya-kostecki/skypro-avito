import styled, { css } from "styled-components";
import { $mobileWidth } from "../constants/breakpoints";
import { createGlobalStyle } from "styled-components";

export const CentralWrapper = css`
    padding-left: 140px;
    padding-right: 140px;
`
export const Container = styled.div`
    ${CentralWrapper}

    @media screen and (max-width: ${$mobileWidth}) {
        padding-left: 18px;
        padding-right: 18px;
    }

`
export const $mainColor = '#009EE4'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
      url('../fonts/Roboto-Regular.ttf') format('ttf');
  }

  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
`;