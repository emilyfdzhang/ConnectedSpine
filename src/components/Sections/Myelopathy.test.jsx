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

describe('Diagnosis for Myelopathy', () => {
  test('Myelopathy is an option when hand symptoms and NOT balance is off is selected by a user', () => {
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
      '06-NUMBNESS-02-subq-3': ['YES'],
      '06-NUMBNESS-02-subq-4': ['NO'],
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

    // Index of Myelopthay is 3 in ResultDetails
    expect(newResultIndex.includes(3)).toBe(true);
  });

  test('Myelopathy is an option when NOT hand symptoms and balance IS off is selected by a user', () => {
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
      '06-NUMBNESS-02-subq-3': ['NO'],
      '06-NUMBNESS-02-subq-4': ['YES'],
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

    // Index of Myelopthay is 3 in ResultDetails
    expect(newResultIndex.includes(3)).toBe(true);
  });

  test('Myelopathy is an option when both hand symptoms and balance is off is selected by a user', () => {
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
      '06-NUMBNESS-02-subq-3': ['YES'],
      '06-NUMBNESS-02-subq-4': ['YES'],
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

    // Index of Myelopthay is 3 in ResultDetails
    expect(newResultIndex.includes(3)).toBe(true);
  });

  // UNCOMMENT THIS TO SEE THAT TEST FAILS WHEN USER DID CHOOSE THE OPTION IN QUESTION, AND COMMENT OUT ABOVE TEST
  //   test('Myelopathy is an option when hand symptoms and/or balance is off is selected by a user', () => {
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
  //       '06-NUMBNESS-02-subq-3': ['NO'],
  //       '06-NUMBNESS-02-subq-4': ['NO'],
  //       '16-subq-0': ['Yes'],
  //       12: ['Fever (temperatures higher than 101.5)'],
  //       13: ['Chest pain'],
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

  //     // Index of Myelopthay is 3 in ResultDetails
  //     expect(newResultIndex.includes(3)).toBe(true);
  //   });
});
