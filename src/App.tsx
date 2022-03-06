import React, { Component } from 'react';
import './App.scss';
import { Timer } from '@/components/Timer';
import { PeopleList, IPeople } from '@/components/PeopleList';
import { Counter } from '@/components/Counter';
import { PeopleDetails } from '@/components/PeopleDetails';

type AppState = {
  currentPeopleNumber: number;
  loadedPeopleCount: number;
  personId: number;
  isVisibleTimer: boolean;
  people: Array<IPeople>;
};

type AppProps = {};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      currentPeopleNumber: 1,
      isVisibleTimer: true,
      people: [],
      loadedPeopleCount: 0,
      personId: 0,
    };

    this.onChangeVisibleTimer = this.onChangeVisibleTimer.bind(this);
    this.getSwapiPeopleInfo = this.getSwapiPeopleInfo.bind(this);
    this.onHandleKeydown = this.onHandleKeydown.bind(this);
    this.onPeopleListClickHandler = this.onPeopleListClickHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onHandleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onHandleKeydown);
  }

  onPeopleListClickHandler(personId: number) {
    this.setState({ personId });
  }

  onHandleKeydown(evt: KeyboardEvent): void {
    if ([13, 32].includes(evt.keyCode)) {
      this.getSwapiPeopleInfo();
    }
  }

  getSwapiPeopleInfo() {
    const { currentPeopleNumber } = this.state;
    fetch(`https://swapi.dev/api/people/${currentPeopleNumber}`)
      .then((response) => response.json())
      .then((result) =>
        this.setState((prevState) => {
          result.id = currentPeopleNumber;
          return {
            people: [...prevState.people, result],
            currentPeopleNumber: prevState.currentPeopleNumber + 1,
            loadedPeopleCount: prevState.loadedPeopleCount + 1,
          };
        })
      )
      .catch(() =>
        this.setState((prevState) => {
          return {
            people: [...prevState.people],
          };
        })
      );
  }

  onChangeVisibleTimer = () => {
    this.setState((prevState) => {
      return { isVisibleTimer: !prevState.isVisibleTimer };
    });
  };

  render() {
    const { isVisibleTimer, loadedPeopleCount, people, personId } = this.state;

    return (
      <>
        <div className="react-hw04">
          <div className="react-hw04__timer">
            <button
              className="react-hw04__button"
              onClick={this.onChangeVisibleTimer}
            >
              Показать/Скрыть таймер
            </button>
            <Timer isVisible={isVisibleTimer}></Timer>
          </div>
          <div className="react-hw04__sw">
            <Counter loadedPeople={loadedPeopleCount}></Counter>
            <div className="react-hw04__sw-data">
              <PeopleList
                people={people}
                onClickHandler={this.onPeopleListClickHandler}
              ></PeopleList>
              <PeopleDetails personId={personId}></PeopleDetails>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
