import styled from 'styled-components';
import image from '../../assets/images/train-track.webp';

export const Wrapper = styled.div`
  background: url(${image}) center center / cover;

  @media (max-width: 1199px) {
    padding-top: 140px;
    height: calc(100vh - 108px);
  }
  @media (max-width: 767px) {
    padding-top: 140px;
    height: calc(100vh - 80px);
  }
  @media (min-width: 1200px) {
    padding-top: 80px;
    height: calc(100vh - 108px);
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 25px;
  @media (min-width: 768px) {
    font-size: 36px;
  }
  @media (min-width: 1200px) {
    font-size: 46px;
  }
  opacity: 0.8;
  text-align: center;
`;
