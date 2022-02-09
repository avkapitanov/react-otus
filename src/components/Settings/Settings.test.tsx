import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';

import { Settings } from './Settings';

describe('Settings', () => {
  const props = {
    width: 5,
    height: 6,
    onChangeWidth: jest.fn(),
    onChangeHeight: jest.fn(),
  };

  it('render Settings component', () => {
    render(<Settings {...props} />);

    const settingsWidth = screen.getByTestId('settings-width');
    expect(settingsWidth).toBeInTheDocument();

    const settingsHeight = screen.getByTestId('settings-height');
    expect(settingsHeight).toBeInTheDocument();
  });

  it('Settings component with input values', () => {
    render(<Settings {...props} />);

    expect(screen.getByDisplayValue(props.width)).toBeInTheDocument();
    expect(screen.getByDisplayValue(props.height)).toBeInTheDocument();
  });
});
