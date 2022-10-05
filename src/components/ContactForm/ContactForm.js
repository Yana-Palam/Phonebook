import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Form } from './ContactForm.styled';
import { addContact } from 'redux/contacts/contactsOperations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const ContactForm = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      return toast.error(`${name} is already in contacts`);
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
    reset();
    closeModal();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        sx={{ m: 1, width: '100%' }}
        id="filled-basic"
        label="Name"
        variant="filled"
        required
        name="name"
        type="text"
        onChange={handleChange}
      />
      <TextField
        sx={{ m: 1, width: '100%' }}
        id="filled-basic"
        label="Number"
        variant="filled"
        required
        name="number"
        type="text"
        onChange={handleChange}
      />

      <Button variant="contained" type="submit">
        Add contact
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ContactForm;
