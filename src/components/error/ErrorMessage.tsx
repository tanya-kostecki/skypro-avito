import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 5px;
  text-align: left;
`;

interface Error {
  message: string | undefined;
}
export const ErrorMessage = ({ message }: Error) => {
  return <Error>{message}</Error>;
};

