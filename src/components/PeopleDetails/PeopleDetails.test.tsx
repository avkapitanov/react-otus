import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { PeopleDetails } from './PeopleDetails';
import { StateMock } from '@react-mock/state';

import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

describe('PeopleDetails', () => {
  it('renders Empty PeopleDetails component', () => {
    render(<PeopleDetails personId={0} />);

    const emptyPerson = screen.getByTestId('empty-person');
    expect(emptyPerson).toBeInTheDocument();
  });

  it('renders with loaded PeopleDetails component', async () => {
    const fakeState = {
      id: 5,
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      gender: 'female',
    };

    const { getByTestId } = render(
      <StateMock state={{ person: fakeState }}>
        <PeopleDetails personId={fakeState.id} />
      </StateMock>
    );

    await waitFor(() => {
      expect(getByTestId('loaded-person')).toBeInTheDocument();
    });
  });
});
