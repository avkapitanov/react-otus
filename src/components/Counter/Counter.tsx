import React, { Component } from 'react';
import './Counter.scss';

type CounterProps = {
  loadedPeople: number;
};

class Counter extends Component<CounterProps> {
  constructor(props: CounterProps) {
    super(props);
  }

  render() {
    const { loadedPeople } = this.props;

    if (loadedPeople == 0) {
      return (
        <div
          className="react-hw04__sw-counter react-hw04__sw-counter--empty"
          data-testid="empty-counter"
        >
          Пока не загружено ни одного персонажа
        </div>
      );
    }

    return (
      <div className="react-hw04__sw-counter" data-testid="with-loaded">
        Загружено персонажей: {loadedPeople}
      </div>
    );
  }
}

export { Counter, CounterProps };
