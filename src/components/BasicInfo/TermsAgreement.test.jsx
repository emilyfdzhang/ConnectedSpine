import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import TermsAgreement from './TermsAgreement';

import { useContext } from 'react';
import { vi } from 'vitest';
// import { describe, expect, test } from 'vitest';
import AssessmentContext from '../../helpers/Contexts';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// import { Await } from 'react-router-dom';

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

let isValid = true;
const setIsValid = () => {
  isValid = !isValid;
};

// describe('FAIL Terms agreement test', () => {

//   test('FAIL Renders correct text', async() => {
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
//     render(
//     <AssessmentContext.Provider value={{isValid, setIsValid }}>
//         <TermsAgreement />
//       </AssessmentContext.Provider>
//     );
//     expect(screen.getByText('This text does not exist in the screen')).toBeDefined();
//   });
// });

describe('Terms agreement test', () => {

  test('Renders correct text', async() => {
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
    render(
    <AssessmentContext.Provider value={{isValid, setIsValid }}>
        <TermsAgreement />
      </AssessmentContext.Provider>
    );
    const TextElements = screen.getAllByText('Terms of Service');
    // expect(screen.getByText('Terms of Service')).toBeDefined();
    expect(TextElements.length).toBeGreaterThan(1)
      //expect(screen.getByText('djbgfkjb')).toBeDefined();
    // expect(screen.getByText('Terms of Service')).toBeDefined();
  });


});

