import { useDispatch, useSelector } from 'react-redux';
import { selectUsername } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import Avatar from 'react-avatar';
import { StyledUserMenu } from './UserMenu.styled';
import Button from '@mui/material/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  return (
    <StyledUserMenu>
      <Avatar size="30" name={name} round={true} color="#ffffff40" />
      <p>Welcome, {name}</p>
      <Button
        sx={{
          color: '#ffffff',
          borderColor: '#ffffff',
          opacity: 0.6,
          '&:hover': {
            opacity: 1,
            borderColor: '#ffffff',
          },
        }}
        variant="outlined"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </StyledUserMenu>
  );
};

export default UserMenu;
