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
  constructor(props: PeopleListProps) {
    super(props);
  }

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
              <li key={item.id} onClick={() => onClickHandler(item.id)}>
                {item.name} {item.gender}
              </li>
            ))}
          </ul>
        ) : (
          <p data-testid="empty">Нет данных</p>
        )}
      </>
    );
  }
}
