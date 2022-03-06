import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Timer } from './Timer';
import { StateMock } from '@react-mock/state';

describe('Timer', () => {
  it('renders not visible Timer component', () => {
    const { queryByTestId } = render(<Timer isVisible={false} />);

    expect(queryByTestId(/timer/i)).toBeNull();
  });

  it('renders visible Timer with 5', async () => {
    const { getByTestId, getByText } = render(
      <StateMock state={{ secondsCount: 5 }}>
        <Timer isVisible={true} />
      </StateMock>
    );

    await waitFor(() => {
      expect(getByTestId('timer')).toBeInTheDocument();
      expect(getByText('5')).toBeInTheDocument();
    });
  });
});
