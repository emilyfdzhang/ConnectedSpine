import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { useDbData } from './utilities/firebase';
vi.mock('./utilities/firebase');

describe('initial tests', () => {
  const mockData = {
    '00': 'result',
  };

  beforeEach(() => {
    useDbData.mockReturnValue([mockData, false, null]);
  });

  test('Home page shows up when finished loading', () => {
    render(<App />);
    expect(
      screen.getByText('Experiencing pain or discomfort in your back or neck?')
    ).toBeDefined();
  });

  // test('Counter should increment by one when clicked', async () => {
  //   render(<App />);
  //   const counter = screen.getByRole('button');
  //   fireEvent.click(counter);
  //   expect(await screen.getByText('count is: 1')).toBeDefined();
  // });
});
