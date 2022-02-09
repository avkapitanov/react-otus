import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    const settingsWidth = screen.getByTestId('settings-width');
    expect(settingsWidth).toBeInTheDocument();

    const settingsHeight = screen.getByTestId('settings-height');
    expect(settingsHeight).toBeInTheDocument();

    const gridSection = screen.getByTestId('grid-section');
    expect(gridSection).toBeInTheDocument();
  });
});
