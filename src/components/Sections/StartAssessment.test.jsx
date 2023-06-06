import { useState, useContext } from 'react';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import Login from './Login';
import App from '../../App';
import AssessmentContext from '../../helpers/Contexts';
import { Await } from 'react-router-dom';
// import { Login } from '@mui/icons-material';


test('Start Assessment Button On Screen When Home Page Rendered', async () => {
    const AssessmentState = 'home';
    render(
        <AssessmentContext.Provider value={{ AssessmentState }} >
            {AssessmentState === 'home' && <Home />}
        </ AssessmentContext.Provider >
    );
    // text only shows up if data is present, and App.jsx goes to Home.jsx
    await waitFor(() => {
        expect(screen.getByText('Start Assessment')).toBeDefined();
        //Test Doesn't Work For Wrong Element
        //expect(screen.getByText('djbgfkjb')).toBeDefined();
    });
});



