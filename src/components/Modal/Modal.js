import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ContactForm from 'components/ContactForm';
import { StyledBox } from './Modal.styled';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';

const ModalEl = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
        Add new contact
      </Button>

      <Modal open={open} onClose={handleClose}>
        <StyledBox>
          {children}
          {/* <ContactForm closeModal={handleClose} /> */}
        </StyledBox>
      </Modal>
    </>
  );
};

ModalEl.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalEl;
