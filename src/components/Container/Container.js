import PropTypes from 'prop-types';

import { ContainerWpr } from './Container.styled';

const Container = ({ children }) => {
  return <ContainerWpr>{children}</ContainerWpr>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
