import styled from 'styled-components';
import { $mobileWidth } from '../../constants/breakpoints';

export const ImageItem = styled.div`
  width: 90px;
  height: 90px;
  background-color: #f0f0f0;
  position: relative;

  @media screen and (max-width: ${$mobileWidth}) {
    width: 60px;
    height: 60px;
  }
`;
export const DeleteImgContainer = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 3;
  background-color: white;
  cursor: pointer;
`;
export const DeleteImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 2px;
    border-radius: 2px;
    background-color: #707070;
    top: 6px;
    left: 0px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
  &:hover::after,
  &:hover::before {
    background-color: #0080c1;
  }
`;

export const ImageInput = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const FormItemImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;
