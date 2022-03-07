import React, { Component } from 'react';
import './Timer.scss';

type TimerState = {
  secondsCount: number;
};

export type TimerProps = {
  isVisible: boolean;
};

export class Timer extends Component<TimerProps, TimerState> {
  intervalId: number;

  constructor(props: TimerProps) {
    super(props);

    this.state = {
      secondsCount: 0,
    };

    this.intervalId = 0;
    this.incrementTime = this.incrementTime.bind(this);
  }

  shouldComponentUpdate() {
    return this.props.isVisible;
  }

  componentDidMount() {
    this.intervalId = window.setInterval(this.incrementTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  incrementTime() {
    this.setState((prevState) => ({
      secondsCount: prevState.secondsCount + 1,
    }));
  }

  render() {
    const { isVisible } = this.props;
    const { secondsCount } = this.state;

    return (
      isVisible && (
        <div className="timer-block" data-testid="timer">
          {secondsCount}
        </div>
      )
    );
  }
}
