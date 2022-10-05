import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Wrapper, StyledDiv } from './ContactListItem.styled';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Paper elevation={3} sx={{ width: '100%' }}>
        <Wrapper>
          <Avatar size="40" name={name} round={true} />
          <StyledDiv>
            <p>{name}</p>
            <p> {number}</p>
          </StyledDiv>
          <IconButton
            aria-label="delete"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Wrapper>
      </Paper>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
