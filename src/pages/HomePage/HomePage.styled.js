import styled from 'styled-components';
import image from '../../assets/images/desk.jpg';

export const Wrapper = styled.div`
  background-image: url(${image});
  background-size: cover;
  height: calc(100vh - 108px);
  width: 100%;
  padding-top: 80px;
`;

export const Title = styled.h1`
  font-size: 46px;
  opacity: 0.7;
  text-align: center;
`;
