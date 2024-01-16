import styled, { keyframes } from 'styled-components';
import { $mobileWidth } from '../../constants/breakpoints';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
export const Loading = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

export const LoaderDiv = styled.div`
  @media screen and (max-width: ${$mobileWidth}) {
    padding-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
