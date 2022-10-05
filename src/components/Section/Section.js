import PropTypes from 'prop-types';
import { SectionWrp } from './Section.styled';

const Section = ({ children }) => {
  return <SectionWrp>{children}</SectionWrp>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
