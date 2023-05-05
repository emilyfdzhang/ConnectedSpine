import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Background, Content, NextButton, Link } from '../styles';
import styled from 'styled-components';

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
    border: 1px solid #979797;
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

const Modal = styled.div`
  display: ${(props) => (props.showModal ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  .show {
    display: block;
  }

  div {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 0 20px 20px 20px;
    border: 1px solid #888;
    width: 80%;
  }
`;

const Exit = styled.span`
  top: 0;
  margin-left: 98%;
  font-size: 25px;
  cursor: pointer;
`;

function isValidUSZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

const ZipCode = () => {
  let navigate = useNavigate();
  const [zipCode, setZipCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleZipCodeChange = (event) => {
    const zip = event.target.value;
    setZipCode(zip);
    setIsValid(isValidUSZip(zip));
  };

  const handleNextClick = () => {
    if (isValid) {
      navigate('/termsagreement');
    } else {
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
        <Modal showModal={showModal}>
          <div>
            <Exit onClick={() => setShowModal(false)}>&times;</Exit>
            <p>
              Some text in the Modal...ome text in the Modal...ome text in the
              Modal... ome text in the Modal... ome text in the Modal... ome
              text in the Modal... ome text in the Modal...ome text in the
              Modal...ome text in the Modal...
            </p>
          </div>
        </Modal>
      </Content>
    </Background>
  );
};

export default ZipCode;
