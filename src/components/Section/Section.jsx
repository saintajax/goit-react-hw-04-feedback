import { Sec, Title } from './Section.styled';
import { PropTypes } from 'prop-types';

export const Section = ({ text, children }) => {
  return (
    <Sec>
      <Title>{text}</Title>
      {children}
    </Sec>
  );
};

Section.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
