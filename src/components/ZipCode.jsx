import { useState } from 'react';
import Header from './Header';
import Modal from './Modal';
import { Background, Content, NextButton, Link } from '../styles';
import styled from 'styled-components';
import AssessmentContext from '../helpers/Contexts';
import { useContext } from 'react';

const borderGrey = '#979797';

const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  max-width: 50%;
`;

const Form = styled.form`
  margin-top: 30px;
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

  p {
    color: red;
    font-size: 10px;
    padding: 2px 10px;
  }
`;

const text = 'this is why we do this';

function isValidUSZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

const ZipCode = () => {
  const { setAssessmentState } = useContext(AssessmentContext);
  const { isValid, setIsValid } = useContext(AssessmentContext);
  const [zipCode, setZipCode] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleZipCodeChange = (event) => {
    const zip = event.target.value;
    setZipCode(zip);
    setIsValid(isValidUSZip(zip));
  };

  const handleNextClick = () => {
    if (isValid) {
      setAssessmentState('questions');
      setIsValid(false);
    }
  };

  return (
    <Background image="../../public/Questions.png">
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
            {isValid ? <></> : <p>* Please enter a valid zip code</p>}
          </Input>
        </Form>
        <Link onClick={() => setShowModal(true)}>Why do we ask this?</Link>
        <Modal showModal={showModal} setShowModal={setShowModal} text={text} />
      </Content>
    </Background>
  );
};

export default ZipCode;
