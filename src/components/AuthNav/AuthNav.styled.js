import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #ffffff;
  opacity: 0.7;
  @media (max-width: 767px) {
    font-size: 16px;
  }
  font-size: 18px;

  &.active {
    opacity: 1;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    opacity: 1;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;
  gap: 30px;
`;
