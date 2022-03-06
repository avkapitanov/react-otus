import React, { Component } from 'react';
import './Counter.scss';

export type CounterProps = {
  loadedPeople: number;
};

export class Counter extends Component<CounterProps> {
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
