// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Questionaire from './components/Questionaire';
import AssessmentContext from './helpers/Contexts';
import ZipCode from './components/ZipCode';
import Result from './components/result';

const App = () => {
  const [AssessmentState, setAssessmentState] = useState("home")
  const [isValid, setIsValid] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])
  return (
    <AssessmentContext.Provider value={{ AssessmentState, setAssessmentState, isValid, setIsValid, selectedOptions, setSelectedOptions }}>
      {AssessmentState === "home" && <Home />}
      {AssessmentState === "zipcode" && <ZipCode />}
      {AssessmentState === "questions" && <Questionaire />}
      {AssessmentState === "result" && <Result />}
    </AssessmentContext.Provider >

  );

};

export default App;
