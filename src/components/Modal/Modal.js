import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ContactForm from 'components/ContactForm';
import { StyledBox } from './Modal.styled';
import AddIcon from '@mui/icons-material/Add';

const ModalEl = () => {
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
          <ContactForm closeModal={handleClose} />
        </StyledBox>
      </Modal>
    </>
  );
};

export default ModalEl;
