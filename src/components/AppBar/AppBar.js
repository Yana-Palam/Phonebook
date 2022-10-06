import { useState } from 'react';
import Navigation from '../Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import Container from 'components/Container';
import MobileMenu from 'components/MobileMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledHeader, StyledWrapper, MenuWrapper } from './AppBar.styled';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && <MobileMenu onClose={handleClose} />}
      <StyledHeader>
        <Container>
          <StyledWrapper>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </StyledWrapper>

          <MenuWrapper>
            <IconButton
              aria-label="menu"
              onClick={handleClick}
              sx={{ marginRight: '20px' }}
            >
              <MenuIcon sx={{ color: '#ffffff', opacity: '0.7' }} />
            </IconButton>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </MenuWrapper>
        </Container>
      </StyledHeader>
    </>
  );
};

export default AppBar;
