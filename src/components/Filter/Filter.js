import React from 'react';
import { useDispatch } from 'react-redux';
import { setValueFilters } from 'redux/filters/filtersSlice';
import { StyledInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setValueFilters(value));
  };

  return (
    <StyledInput
      id="filled-search"
      label="Find contact by name"
      type="search"
      variant="filled"
      onChange={handleChange}
    />
  );
};

export default Filter;
