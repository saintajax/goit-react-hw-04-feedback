import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => {
      return { [state]: prevState[state] + 1 };
    });
  };

  countTotalFeeds() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  calcPositiveFeedsPercent() {
    return (
      `${Math.round((this.state.good * 100) / this.countTotalFeeds())}%` || '0'
    );
  }

  render() {
    return (
      <>
        <Section text="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section text="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeeds()}
            positiveFeedback={this.calcPositiveFeedsPercent()}
          />
        </Section>
      </>
    );
  }
}
