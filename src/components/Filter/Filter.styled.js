import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const StyledInput = styled(TextField)`
  width: 100%;
  @media (min-width: 425px) {
    width: 400px;
  }
`;
