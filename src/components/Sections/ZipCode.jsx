import { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import { getAuth } from 'firebase/auth';
import Header from '../Header';
import Modal from '../Modal';
import { RequireZipCode } from '../../helpers/Explanations';
import styled from 'styled-components';
import { Background, Content, Link, Warning } from '../../styles';
import { NextButton } from '../../buttonStyles';
import { signInWithEmailAndPassword } from 'firebase/auth';

const borderGrey = '#979797';

const Title = styled.h1`
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  max-width: 50%;
`;

const Form = styled.form`
  margin-top: 30px;
  label {
    font-weight: 400;
  }
`;

const Input = styled.div`
  margin: 10px 0;
  input {
    width: 227px;
    height: 45px;
    margin-right: 20px;
    padding-left: 10px;
    border: 1px solid ${borderGrey};
    border-radius: 4px;

    ::placeholder {
      font-style: italic;
    }
  }
`;

const text = 'this is why we do this';

function isValidUSZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

const ZipCode = () => {
  const { setAssessmentState } = useContext(AssessmentContext);
  const { answers, setAnswers } = useContext(AssessmentContext);
  const { isValid, setIsValid } = useContext(AssessmentContext);
  const [zipCode, setZipCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const currentUser = getAuth().currentUser;
  //   setUser(currentUser);
  // }, []);

  // if (user === null) {
  //   return <div>Loading...</div>;
  // }

  const user = getAuth().currentUser;

  if (!user) {
    return <div>Error</div>;
  }
  // const user = useUserState();

  const handleZipCodeChange = (event) => {
    const zip = event.target.value;
    setZipCode(zip);
    setIsValid(isValidUSZip(zip));
  };

  const handleNextClick = () => {
    if (isValid) {
      const currentAnswer = { ...answers, zipcode: zipCode };
      setAnswers(currentAnswer);
      setAssessmentState('questions');
      setIsValid(false);
    }
  };

  useEffect(() => {
    // Previous answers are saved when clicking the back button
    if (answers['zipcode']) {
      const previousAnswer = answers['zipcode'];
      setZipCode(previousAnswer);
      // still able to click next
      setIsValid(true);
    }
  }, []);

  // if (!user) {
  //   return <h1>Error</h1>;
  // }

  return (
    <Background image="../../questions.png">
      <Header />
      <Content>
        <Title>Hi there! Before we begin, please enter your zipcode.</Title>
        <Form>
          <label>Zipcode</label>
          <Input>
            <input
              type="text"
              placeholder="Must be 5 digits"
              value={zipCode}
              onChange={handleZipCodeChange}
            />
            <NextButton
              onClick={handleNextClick}
              isValid={isValid}
              disabled={!isValid}
              title={isValid ? undefined : 'Please enter a valid zip code'}
            >
              Next
            </NextButton>
            {isValid ? (
              <></>
            ) : (
              <Warning>* Please enter a valid zip code</Warning>
            )}
          </Input>
        </Form>
        <Link onClick={() => setShowModal(true)}>Why do we ask this?</Link>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          text={RequireZipCode}
        />
      </Content>
    </Background>
  );
};

export default ZipCode;
