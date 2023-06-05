import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Result from './Result';
import AssessmentContext from '../../helpers/Contexts';
import { initializeApp } from 'firebase/app';
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

describe('Cauda Equina Results', () => {
  // COMMENT OUT BELOW TEST WHEN USING THIS TEST
  test('Cauda Equina is an option when "cannot control when I use the bathroom is selected" is selected by user, should pass', () => {
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
      13: ['Cannot control when I go to the bathroom'],
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

    // Cauda Equina is a possible diagnosis when cannot control when I go to the bathroom is selected
    // because the index of Cauda Equina is 6 in ResultDetails
    expect(newResultIndex.includes(6)).toBe(true);
  });

  // UNCOMMENT THIS TO SEE THAT TEST FAILS WHEN USER DID CHOOSE THE OPTION IN QUESTION, AND COMMENT OUT ABOVE TEST
  //   test('Cauda Equina is an option when "cannot control when I use the bathroom is selected" is selected by user, should pass', () => {
  //     vi.mock('firebase/auth', () => {
  //       return {
  //         getAuth: () => {
  //           return {
  //             currentUser: {
  //               email: 'test@gmail.com',
  //               uid: '2mGyJ26Lddb8XLknxp0K8q2pVqa2',
  //             },
  //           };
  //         },
  //       };
  //     });

  //     const answers = {
  //       '06': ['SHARP PAIN'],
  //       '07-subq-0': ['AM AT REST'],
  //       '05': ['ON THE RIGHT'],
  //       '16-subq-0': ['Yes'],
  //       12: ['Fever (temperatures higher than 101.5)'],
  //       13: ['Groin/scrotum pain'],
  //     };

  //     const mockData = {
  //       '2mGyJ26Lddb8XLknxp0K8q2pVqa2': {
  //         email: 'test@gmail.com',
  //         results: ['result1', 'result2'],
  //       },
  //     };

  //     render(
  //       <AssessmentContext.Provider value={{ answers }}>
  //         <Result data={mockData} />
  //       </AssessmentContext.Provider>
  //     );

  //     const resultIndexElement = screen.getByTestId('result-component');
  //     const resultIndex = JSON.parse(resultIndexElement.textContent);
  //     const newResultIndex = String(resultIndex).split('').map(Number);

  //     // Cauda Equina is a possible diagnosis when cannot control when I go to the bathroom is selected
  //     // because the index of Cauda Equina is 6 in ResultDetails
  //     expect(newResultIndex.includes(6)).toBe(true);
  //   });
});
