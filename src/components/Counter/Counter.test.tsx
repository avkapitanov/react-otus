import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Counter } from './Counter';

describe('Counter', () => {
  it('renders Empty component', () => {
    render(<Counter loadedPeople={0} />);

    const emptyCounter = screen.getByTestId('empty-counter');
    expect(emptyCounter).toBeInTheDocument();

    const empty = renderer.create(<Counter loadedPeople={0} />).toJSON();
    expect(empty).toMatchSnapshot();
  });

  it('renders with loaded elements component', () => {
    render(<Counter loadedPeople={5} />);

    const loadedCounter = screen.getByTestId('with-loaded');
    expect(loadedCounter).toBeInTheDocument();

    const loaded = renderer.create(<Counter loadedPeople={5} />).toJSON();
    expect(loaded).toMatchSnapshot();
  });
});
