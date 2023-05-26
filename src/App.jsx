import { useState } from 'react';
import AssessmentContext from './helpers/Contexts';
import Loading from './helpers/Loading';
import Login from './components/Sections/Login';
import SignUp from './components/Sections/SignUp';
import Home from './components/Sections/Home';
import Profile from './components/Sections/Profile';
import ZipCode from './components/Sections/ZipCode';
import Questionaire from './components/Sections/Questionaire';
import Result from './components/Sections/Result';

import { useDbData } from './utilities/firebase';

const App = () => {
  const [AssessmentState, setAssessmentState] = useState('home');
  const [isValid, setIsValid] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isLogedIn, setIsLogedIn] = useState(false);

  const [data, error] = useDbData('/');
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <Loading />;
  if (!data) return <h1>No data found</h1>;

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
        isLogedIn,
        setIsLogedIn,
      }}
    >
      {AssessmentState === 'home' && <Home />}
      {AssessmentState === 'profile' && <Profile />}
      {AssessmentState === 'login' && <Login />}
      {AssessmentState === 'signup' && <SignUp />}
      {AssessmentState === 'zipcode' && <ZipCode />}
      {AssessmentState === 'questions' && <Questionaire data={data['users']} />}
      {AssessmentState === 'result' && <Result data={data['users']} />}
    </AssessmentContext.Provider>
  );
};

export default App;
