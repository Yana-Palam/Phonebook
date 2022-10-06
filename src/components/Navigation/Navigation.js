import { List, StyledLink, StyledItem } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const Navigation = ({ onClose }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <List>
        <StyledItem>
          <StyledLink to="/" end onClick={onClose}>
            Home
          </StyledLink>
        </StyledItem>
        {isLoggedIn && (
          <StyledItem>
            <StyledLink to="/contacts" end onClick={onClose}>
              Contacts
            </StyledLink>
          </StyledItem>
        )}
      </List>
    </nav>
  );
};
export default Navigation;
