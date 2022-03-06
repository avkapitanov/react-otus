import React from 'react';
import { render, screen } from '@testing-library/react';

import { PeopleList } from './PeopleList';

describe('PeopleList', () => {
  const clickHandler = jest.fn();

  it('renders Empty component', () => {
    render(<PeopleList people={[]} onClickHandler={clickHandler} />);

    const emptyList = screen.getByTestId('empty');
    expect(emptyList).toBeInTheDocument();
  });

  it('renders with loaded elements component', () => {
    const peopleList = [
      {
        id: 5,
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        gender: 'female',
      },
    ];
    render(<PeopleList people={peopleList} onClickHandler={clickHandler} />);

    const loadedList = screen.getByTestId('with-loaded');
    expect(loadedList).toBeInTheDocument();
  });
});
