import Box from '@mui/material/Box';
import styled from 'styled-components';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 12px);
  @media (min-width: 425px) {
    width: 420px;
  }

  background-color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  padding: 30px;
`;
