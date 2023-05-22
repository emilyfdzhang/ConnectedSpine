import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/Sections/Home';
import AssessmentContext from './helpers/Contexts';
import { useDbData } from './utilities/firebase';
vi.mock('./utilities/firebase');

describe('initial tests and data tests', () => {
  const mockData = {
    questions: {
      '00': 'result',
      '01': 'result2',
    },
  };

  test('Home page shows up when finished loading, using mocked data. Should pass', () => {
    useDbData.mockReturnValue([mockData, false, null]);
    render(<App />);
    // text only shows up if data is present, and App.jsx goes to Home.jsx
    expect(
      screen.getByText('Experiencing pain or discomfort in your back or neck?')
    ).toBeDefined();
  });

  test('Home page shows up when finished loading, using real data. Should pass', async () => {
    useDbData.mockReturnValueOnce([mockData, false, null]); // Mock the initial call with mocked data
    useDbData.mockReturnValueOnce([null, false, null]); // Mock the second call with real data
    render(<App />);
    // text only shows up if data is present, and App.jsx goes to Home.jsx
    expect(
      await screen.getByText(
        'Experiencing pain or discomfort in your back or neck?'
      )
    ).toBeDefined();
  });

  // test('Counter should increment by one when clicked', async () => {
  //   render(<App />);
  //   const counter = screen.getByRole('button');
  //   fireEvent.click(counter);
  //   expect(await screen.getByText('count is: 1')).toBeDefined();
  // });
});
