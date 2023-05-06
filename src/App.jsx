// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Questionaire from './components/Questionaire';
import AssessmentContext from './helpers/Contexts';
import ZipCode from './components/ZipCode';

const App = () => {
  const [AssessmentState, setAssessmentState] = useState("home")
  return (
    <AssessmentContext.Provider value={{ AssessmentState, setAssessmentState }}>
      {AssessmentState === "home" && <Home />}
      {AssessmentState === "zipcode" && <ZipCode />}
      {AssessmentState === "questions" && <Questionaire />}
    </AssessmentContext.Provider >

  );

};

export default App;
