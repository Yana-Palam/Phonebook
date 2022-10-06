import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 30px);
  @media (min-width: 425px) {
    width: 400px;
  }
`;
