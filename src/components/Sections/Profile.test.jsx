import { vi } from 'vitest';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';
import Login from './Login';
import AssessmentContext from '../../helpers/Contexts';
import { initializeApp } from 'firebase/app';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

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

describe('Profile tests for users', () => {
  let isLogedIn = true;

  // UNCOMMENT THIS TO SEE THAT TEST FAILS WHEN USER IS NOT LOGGED IN, AND COMMENT OUT BELOW TEST
  //   test('Cant access Profile page when user is not logged in, should not pass', () => {
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
  //       <AssessmentContext.Provider value={{ isLogedIn }}>
  //         <Profile />
  //       </AssessmentContext.Provider>
  //     );
  //     expect(screen.getByText('Profile Page')).toBeDefined();
  //   });

  // COMMENT OUT ABOVE TEST WHEN USING THIS TEST
  test('Access Profile page when user is logged in, should pass', () => {
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
      <AssessmentContext.Provider value={{ isLogedIn }}>
        <Profile />
      </AssessmentContext.Provider>
    );
    expect(screen.getByText('Profile Page')).toBeDefined();
  });
});
