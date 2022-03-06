import React from 'react';
import { render, screen } from '@testing-library/react';

import { Counter } from './Counter';

describe('Counter', () => {
  it('renders Empty component', () => {
    render(<Counter loadedPeople={0} />);

    const emptyCounter = screen.getByTestId('empty-counter');
    expect(emptyCounter).toBeInTheDocument();
  });

  it('renders with loaded elements component', () => {
    render(<Counter loadedPeople={5} />);

    const loadedCounter = screen.getByTestId('with-loaded');
    expect(loadedCounter).toBeInTheDocument();
  });
});
