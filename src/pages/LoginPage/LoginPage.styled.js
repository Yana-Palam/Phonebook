import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 26px;
  }
  margin-bottom: 20px;
`;
