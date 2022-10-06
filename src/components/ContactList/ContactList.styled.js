import styled from 'styled-components';

export const Contact = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  @media (min-width: 425px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: calc((100% - 1 * 30px) / 2);
  }
  @media (min-width: 1200px) {
    width: calc((100% - 2 * 30px) / 3);
  }
`;

export const List = styled.ul`
  @media (min-width: 425px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 30px;
`;
