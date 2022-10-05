import React from 'react';
import { StyledLink, List } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <List>
      <li>
        <StyledLink to="/register" end>
          Register
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/login" end>
          Login
        </StyledLink>
      </li>
    </List>
  );
};

export default AuthNav;
