import { useContext } from 'react';
import { vi } from 'vitest';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ZipCode from './ZipCode';
import AssessmentContext from '../../helpers/Contexts';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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

describe('ZipCode tests for users', () => {
  const answers = {
    zipcode: '60103',
  };
  let isValid = true;
  const setIsValid = () => {
    isValid = !isValid;
  };

  // UNCOMMENT THIS TO SEE THAT TEST FAILS WHEN USER IS NOT LOGGED IN, AND COMMENT OUT BELOW TEST
  //   test('Cant access Zipcode page when user is not logged in, should not pass', () => {
  //     vi.mock('firebase/auth', () => {
  //       return {
  //         getAuth: () => {
  //           return {
  //             currentUser: null,
  //           };
  //         },
  //       };
  //     });
  //     render(
  //       <AssessmentContext.Provider value={{ answers, isValid, setIsValid }}>
  //         <ZipCode />
  //       </AssessmentContext.Provider>
  //     );
  //     expect(
  //       screen.getByText('Hi there! Before we begin, please enter your zipcode.')
  //     ).toBeDefined();
  //   });

  // COMMENT OUT ABOVE TEST WHEN USING THIS TEST
  test('Access Zipcode page when user is logged in, should pass', () => {
    vi.mock('firebase/auth', () => {
      return {
        getAuth: () => {
          return {
            currentUser: {
              email: 'test@gmail.com',
            },
          };
        },
      };
    });
    render(
      <AssessmentContext.Provider value={{ answers, isValid, setIsValid }}>
        <ZipCode />
      </AssessmentContext.Provider>
    );
    expect(
      screen.getByText('Hi there! Before we begin, please enter your zipcode.')
    ).toBeDefined();
  });

  // test('Counter should increment by one when clicked', async () => {
  //   render(<App />);
  //   const counter = screen.getByRole('button');
  //   fireEvent.click(counter);
  //   expect(await screen.getByText('count is: 1')).toBeDefined();
  // });
});
