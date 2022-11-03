import { PropTypes } from 'prop-types';
import { Box } from '../Box/Box';
import { Text } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = props => {
  return (
    <Box width="500px" mb="40px">
      {props.total ? (
        Object.keys(props).map((prop, index) => (
          <Text key={index}>{`${prop}: ${props[prop]}`}</Text>
        ))
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Box>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
