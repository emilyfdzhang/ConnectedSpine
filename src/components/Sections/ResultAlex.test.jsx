import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Result from './Result';
// import AssessmentContext from '../helpers/Contexts';
// import { useDbData } from './utilities/firebase';
import AssessmentContext from '../../helpers/Contexts';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { ResultDetails } from '../../helpers/RecommendedDetails';
vi.mock('./utilities/firebase');

const firebaseConfig = {
  apiKey: 'AIzaSyDPOkyUz5CWBVtnnEbCiXHigIbsRggAVxQ',
  authDomain: 'connectedspine-6185c.firebaseapp.com',
  projectId: 'connectedspine-6185c',
  storageBucket: 'connectedspine-6185c.appspot.com',
  messagingSenderId: '1007989386438',
  appId: '1:1007989386438:web:ae244de67f858f182efbc7',
  measurementId: 'G-HWSQ69B24Y',
};

// Initialize Firebase app with configuration
initializeApp(firebaseConfig);

describe('Results component', () => {
  test('Infection is an option when fever is selected by user, should pass', () => {
    // Commenting out lines of code from Result.jsx causes the test to fail
    // so, the test fails with broken code
    vi.mock('firebase/auth', () => {
      return {
        getAuth: () => {
          return {
            currentUser: {
              email: 'test@gmail.com',
              uid: '2mGyJ26Lddb8XLknxp0K8q2pVqa2',
            },
          };
        },
      };
    });
    const answers = {
      '06': ['SHARP PAIN'],
      '07-subq-0': ['AM AT REST'],
      '05': ['ON THE RIGHT'],
      '16-subq-0': ['Yes'],
      12: ['Fever (temperatures higher than 101.5)'],
      13: ['Chest pain'],
    };

    const mockData = {
      '2mGyJ26Lddb8XLknxp0K8q2pVqa2': {
        email: 'test@gmail.com',
        results: ['result1', 'result2'],
      },
    };

    render(
      <AssessmentContext.Provider value={{ answers }}>
        <Result data={mockData} />
      </AssessmentContext.Provider>
    );

    const resultIndexElement = screen.getByTestId('result-component');
    const resultIndex = JSON.parse(resultIndexElement.textContent);
    const newResultIndex = String(resultIndex).split('').map(Number);

    // Infection is a possible diagnosis when fever is selected
    // because the index of infection is 5 in ResultDetails
    expect(newResultIndex.includes(5)).toBe(true);
  });
});
