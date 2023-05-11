import { useState } from 'react';
import AssessmentContext from './helpers/Contexts';
import Home from './components/Home';
import ZipCode from './components/ZipCode';
import Questionaire from './components/Questionaire';
import Result from './components/result';

import { useDbData } from './utilities/firebase';

const App = () => {
  const [AssessmentState, setAssessmentState] = useState('home');
  const [isValid, setIsValid] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [data, error] = useDbData('/');
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
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
      }}
    >
      {AssessmentState === 'home' && <Home />}
      {AssessmentState === 'zipcode' && <ZipCode />}
      {AssessmentState === 'questions' && <Questionaire />}
      {AssessmentState === 'result' && <Result />}
    </AssessmentContext.Provider>
  );
};

export default App;
