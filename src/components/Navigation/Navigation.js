import { List, StyledLink, StyledItem } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <List>
        <StyledItem>
          <StyledLink to="/" end>
            Home
          </StyledLink>
        </StyledItem>
        {isLoggedIn && (
          <StyledItem>
            <StyledLink to="/contacts" end>
              Contacts
            </StyledLink>
          </StyledItem>
        )}
      </List>
    </nav>
  );
};
export default Navigation;
