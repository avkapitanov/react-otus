import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    const timer = screen.getByTestId('timer');
    expect(timer).toBeInTheDocument();

    const emptyList = screen.getByTestId('empty-list');
    expect(emptyList).toBeInTheDocument();

    const emptyDetails = screen.getByTestId('empty-person');
    expect(emptyDetails).toBeInTheDocument();
  });
});
