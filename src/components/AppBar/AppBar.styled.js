import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const StyledHeader = styled.header`
  background-color: #333741;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const StyledWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledButton = styled(IconButton)`
  fill: #ffffff;
`;
