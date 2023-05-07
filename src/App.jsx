// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Questionaire from './components/Questionaire';
import AssessmentContext from './helpers/Contexts';
import ZipCode from './components/ZipCode';

const App = () => {
  const [AssessmentState, setAssessmentState] = useState("home")
  const [isValid, setIsValid] = useState(false)
  const [selectedButton, setSelectedButton] = useState(null)
  return (
    <AssessmentContext.Provider value={{ AssessmentState, setAssessmentState, isValid, setIsValid, selectedButton, setSelectedButton }}>
      {AssessmentState === "home" && <Home />}
      {AssessmentState === "zipcode" && <ZipCode />}
      {AssessmentState === "questions" && <Questionaire />}
    </AssessmentContext.Provider >

  );

};

export default App;
