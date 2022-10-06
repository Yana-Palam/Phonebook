import Navigation from '../Navigation';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Wrapper } from './MobileMenu.styled';

const MobileMenu = ({ onClose }) => {
  return (
    <Wrapper>
      <IconButton
        aria-label="close"
        sx={{ position: 'absolute', top: 14, right: 14 }}
        onClick={onClose}
      >
        <CloseIcon sx={{ color: '#ffffff', opacity: '0.7' }} />
      </IconButton>
      <Navigation onClose={onClose} />
    </Wrapper>
  );
};

export default MobileMenu;
