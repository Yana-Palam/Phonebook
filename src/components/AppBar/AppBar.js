import Navigation from '../Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import Container from 'components/Container';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledHeader, StyledWrapper } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledHeader>
      <Container>
        <StyledWrapper>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </StyledWrapper>
      </Container>
    </StyledHeader>
  );
};

export default AppBar;
