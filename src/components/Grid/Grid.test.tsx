import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Grid } from './Grid';

describe('Grid', () => {
  it('renders Grid component 3х3', () => {
    const props = {
      width: 3,
      height: 3,
    };
    render(<Grid {...props} />);
    expect(screen.getAllByTestId('cell-alive').length).toBe(9);
    expect(screen.queryByTestId('cell-dead')).toBeNull();
  });

  it('renders Grid component 3х3 with template', () => {
    const props = {
      width: 3,
      height: 3,
      template: [
        [0, 1, 1],
        [0, 0, 0],
        [1, 1, 0],
      ],
    };
    render(<Grid {...props} />);
    expect(screen.getAllByTestId('cell-alive').length).toBe(4);
    expect(screen.getAllByTestId('cell-dead').length).toBe(5);
  });

  it('renders Grid component 5х5 with template', () => {
    const props = {
      width: 5,
      height: 5,
      template: [
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ],
    };
    render(<Grid {...props} />);
    expect(screen.getAllByTestId('cell-alive').length).toBe(20);
    expect(screen.getAllByTestId('cell-dead').length).toBe(5);
  });

  it('renders Grid component 3х3 with incorrect template', () => {
    const props = {
      width: 3,
      height: 3,
      template: [
        [0, 1],
        [0, 0],
        [1, 0],
      ],
    };
    render(<Grid {...props} />);
    expect(screen.getAllByTestId('cell-alive').length).toBe(5);
    expect(screen.getAllByTestId('cell-dead').length).toBe(4);
  });
});
