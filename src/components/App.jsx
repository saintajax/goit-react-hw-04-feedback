import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };

  const onLeaveFeedback = state => {
    // const normalaziName = `${state[0].toUpperCase()}${state.substring(1)}`;
    // const setterName = `set${normalaziName}`;
    // eval(
    //   `${setterName}(${prev => {
    //     return prev + 1;
    //   }})`
    // );
    switch (state) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeeds = () => {
    return good + neutral + bad;
  };

  const calcPositiveFeedsPercent = () => {
    return `${Math.round((good * 100) / countTotalFeeds())}%` || '0';
  };

  return (
    <>
      <Section text="Please leave feedback">
        <FeedbackOptions
          options={feedbacks}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section text="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeeds()}
          positiveFeedback={calcPositiveFeedsPercent()}
        />
      </Section>
    </>
  );
};
