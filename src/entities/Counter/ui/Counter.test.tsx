import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Counter } from './Counter';

describe('counter', () => {
  test('render counter', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    expect(screen.getByTestId('counter')).toHaveTextContent('10');
  });

  test('increment', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    await userEvent.click(screen.getByTestId('increment-btn'));
    await expect(screen.getByTestId('counter')).toHaveTextContent('11');
  });

  test('decrement', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    await userEvent.click(screen.getByTestId('decrement-btn'));
    await expect(screen.getByTestId('counter')).toHaveTextContent('9');
  });
});
