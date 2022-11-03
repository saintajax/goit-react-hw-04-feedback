import { Button } from './FeedbackOptions.styled';
import { Box } from '../Box/Box';
import { PropTypes } from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      {Object.keys(options).map((option, index) => (
        <Button
          key={index}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
