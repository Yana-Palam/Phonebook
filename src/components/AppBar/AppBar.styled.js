import styled from 'styled-components';
import image from '../../assets/images/Blue-Background.jpg';

export const StyledHeader = styled.header`
  background-color: #1976d2;
  background-image: url(${image});
  background-size: cover;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
