import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Cell, Coords } from './Cell';

describe('Cell', () => {
  const props = {
    isAlive: true,
    cellNumber: 1,
    isContentVisible: true,
    coords: [0, 0] as Coords,
    onClick: jest.fn(),
  };

  it('renders Alive Cell component', () => {
    render(<Cell {...props} />);

    const aliveCell = screen.getByTestId('cell-alive');
    expect(aliveCell).toBeInTheDocument();
    expect(screen.getByText(props.cellNumber)).toBeInTheDocument();
  });

  it('renders Alive Cell component without content', () => {
    render(<Cell {...props} isContentVisible={false} />);

    const aliveCell = screen.getByTestId('cell-alive');
    expect(aliveCell).toBeInTheDocument();
    expect(aliveCell).toBeEmptyDOMElement();
  });

  it('renders Alive Cell with click event', () => {
    render(<Cell {...props} isContentVisible={false} />);

    const aliveCell = screen.getByTestId('cell-alive');
    expect(aliveCell).toBeInTheDocument();
    expect(aliveCell).toBeEmptyDOMElement();

    fireEvent.click(aliveCell);
    expect(props.onClick).toHaveBeenCalled();
  });

  it('renders Dead Cell component', () => {
    render(<Cell {...props} isAlive={false} />);

    const deadCell = screen.getByTestId('cell-dead');
    expect(deadCell).toBeEmptyDOMElement();
    expect(deadCell).toBeInTheDocument();
  });
});
