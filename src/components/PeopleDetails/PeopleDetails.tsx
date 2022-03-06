import React, { Component } from 'react';
import './PeopleDetails.scss';

export interface IPeople {
  id: number;
  name: string;
  gender: string;
  height: string;
  mass: string;
}

export type PeopleDetailsState = {
  person: IPeople | null;
};

export type PeopleDetailsProps = {
  personId: number;
};

class PeopleDetails extends Component<PeopleDetailsProps, PeopleDetailsState> {
  constructor(props: PeopleDetailsProps) {
    super(props);

    this.state = {
      person: null,
    };

    this.updatePerson = this.updatePerson.bind(this);
  }

  componentDidUpdate(prevProps: PeopleDetailsProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    fetch(`https://swapi.dev/api/people/${personId}`)
      .then((response) => response.json())
      .then((person) => this.setState({ person }))
      .catch(() => this.setState({ person: null }));
  }

  render() {
    const { person } = this.state;

    if (!person) {
      return (
        <div
          className="react-hw04__sw-data-details--empty"
          data-testid="empty-person"
        >
          Никто не выбран
        </div>
      );
    }

    return (
      <div
        className="react-hw04__sw-data-details people-details"
        data-testid="loaded-person"
      >
        <div className="people-details__line">
          <span className="people-details__line-name">Name:</span>
          {person.name}
        </div>
        <div>
          <span className="people-details__line-name">Gender:</span>
          {person.gender}
        </div>
        <div>
          <span className="people-details__line-name">Height:</span>
          {person.height}
        </div>
        <div>
          <span className="people-details__line-name">Mass:</span>
          {person.mass}
        </div>
      </div>
    );
  }
}

export { PeopleDetails };
