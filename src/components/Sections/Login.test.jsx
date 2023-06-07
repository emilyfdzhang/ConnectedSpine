import { vi } from 'vitest';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import Home from './Home';
import AssessmentContext from '../../helpers/Contexts';
import { initializeApp } from 'firebase/app';

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

describe('Login page test', () => {
  test('Prompts log in when on Login page, should pass', () => {
    let AssessmentState = 'login';
    const setAssessmentState = (new_state) => {
      AssessmentState = new_state;
    };
    let isLogedIn = false;
    const setIsLogedIn = (new_login) => {
      isLogedIn = new_login;
    };
    let prevPage = 'home';
    const setPrevPage = (new_page) => {
      prevPage = new_page;
    };
    render(
      <AssessmentContext.Provider
        value={{ setAssessmentState, setIsLogedIn, prevPage, setPrevPage }}
      >
        <Login />
      </AssessmentContext.Provider>
    );
    const LoginText = screen.getAllByText('Login');
    expect(LoginText.length).toBeGreaterThan(1);
  });
  // UNCOMMENT THIS TO SEE THAT TEST FAILS WHEN USER IS NOT ON THE LOGIN PAGE, AND COMMENT OUT ABOVE TEST
  //   test('Prompts log in when on Login page, should not pass', () => {
  //     let AssessmentState = 'home';
  //     render(
  //       <AssessmentContext.Provider value={{ AssessmentState }}>
  //         <Home />
  //       </AssessmentContext.Provider>
  //     );
  //     const LoginText = screen.getAllByText('Login');
  //     expect(LoginText.length).toBeGreaterThan(1);
  //   });
});
