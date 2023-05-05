import {
  BackButton,
  Background,
  Content,
  NextButton,
  ContentContainer,
  RightContent,
  LeftContent,
  BackNextButtonContainer,
} from '../styles';
import Header from '../components/Header';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
// import "bootstrap-icons/font/bootstrap-icons.css";

const Card = ({ buttonclick }) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card card-square">
            <div class="card-body text-center">
              <button class="btn btn-light btn-large" onClick={buttonclick}> Myself</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card card-square">
            <div class="card-body text-center">
              <button class="btn btn-light btn-large" onClick={buttonclick}> Someone Else</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const IntroQ2 = () => {
  let navigate = useNavigate();


  const [isValid, setIsValid] = useState(false);
  function handleButtonClick() {
    setIsValid(!isValid);
  }
  const handleBackClick = () => {
    navigate('/termsagreement');
  };
  const handleNextClick = () => {
    if (isValid) {
      navigate('/IntroQ3');
    } else {
    }
  };
  return (
    <Background image="../../public/Pages.jpg">
      <Header />
      <Content>
        <ContentContainer>
          <LeftContent>
            <h3>Section 1</h3>
            <h2>Basic Info</h2>
            <h1>Who are you answering this questionnaire for?</h1>
          </LeftContent>
          <RightContent>
            <Card buttonclick={handleButtonClick} />
            <BackNextButtonContainer>
              <BackButton onClick={handleBackClick}>Back</BackButton>
              <NextButton isValid={isValid} onClick={handleNextClick}>
                Next
              </NextButton>
            </BackNextButtonContainer>
          </RightContent>
        </ContentContainer>
      </Content>
    </Background >
  );
};
export default IntroQ2;
