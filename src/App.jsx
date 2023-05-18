import { useState } from 'react';
import AssessmentContext from './helpers/Contexts';
import Loading from './helpers/Loading';
import LoginSignup from './components/Sections/LoginSignup';
import Home from './components/Sections/Home';
import ZipCode from './components/Sections/ZipCode';
import Questionaire from './components/Sections/Questionaire';
import Result from './components/Sections/Result';

import { useDbData } from './utilities/firebase';

const App = () => {
  const [AssessmentState, setAssessmentState] = useState('home');
  const [isValid, setIsValid] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answers, setAnswers] = useState({});

  const [data, error] = useDbData('/');
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <Loading/>;
  if (!data) return <h1>No data found</h1>;

  console.log(`Data: ${data}`);

  Object.entries(data.users).map(([id, question]) =>
    console.log(`User: ${id} Question: ${question.Question1}`)
  );

  return (
    <AssessmentContext.Provider
      value={{
        AssessmentState,
        setAssessmentState,
        isValid,
        setIsValid,
        selectedOptions,
        setSelectedOptions,
        answers,
        setAnswers,
      }}
    >
      {AssessmentState === 'home' && <Home />}
      {AssessmentState === 'login-signup' && <LoginSignup />}
      {AssessmentState === 'zipcode' && <ZipCode />}
      {AssessmentState === 'questions' && <Questionaire />}
      {AssessmentState === 'result' && <Result />}
    </AssessmentContext.Provider>
  );
};

export default App;
