import React, { Component } from 'react';
import './PeopleList.scss';

export interface IPeople {
  id: number;
  name: string;
  gender: string;
  height: string;
  mass: string;
}

type PeopleListState = {
  secondsCount: number;
};

export type PeopleListProps = {
  people: Array<IPeople>;
  onClickHandler: (id: number) => void;
};

export class PeopleList extends Component<PeopleListProps, PeopleListState> {
  render() {
    const { people, onClickHandler } = this.props;
    return (
      <>
        {people.length ? (
          <ul
            className="react-hw04__sw-data-list person-list"
            data-testid="with-loaded"
          >
            {people.map((item) => (
              <li
                className="person-list__item"
                key={item.id}
                onClick={() => onClickHandler(item.id)}
                data-testid="person-item"
              >
                {item.name} {item.gender}
              </li>
            ))}
          </ul>
        ) : (
          <p
            className="react-hw04__sw-data-list--empty person-list--empty"
            data-testid="empty-list"
          >
            Нет данных
          </p>
        )}
      </>
    );
  }
}
