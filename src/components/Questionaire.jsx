import React, { useState } from 'react';
import AssessmentContext from '../helpers/Contexts';
import { useContext } from 'react';
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
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Questions from '../helpers/Questions';
import TermsAgreement from './BasicInfo/TermsAgreement';
import './BasicInfo/TermsAgreement.css';
import Q2 from './BasicInfo/Q2';
import Q3 from './BasicInfo/Q3';
import Options from './Options';
const Questionaire = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const {
    AssessmentState,
    setAssessmentState,
    isValid,
    setIsValid,
    selectedButton,
    setSelectedButton,
  } = useContext(AssessmentContext);
  const handleBackClick = () => {
    if (currQuestion === 0) {
      setAssessmentState('zipcode');
    } else {
      setCurrQuestion(currQuestion - 1);
    }
  };
  const handleNextClick = () => {
    if (currQuestion === Questions.length - 1) {
      setAssessmentState('questions');
    }

    else if (isValid) {
      setIsValid(false);
      setSelectedButton(null);
      setCurrQuestion(currQuestion + 1);
    }
  };

  return (
    <Background image="../../dist/Pages.jpg">
      <Header />
      <Content>
        <ContentContainer>
          <LeftContent>
            <h3>Section {Questions[currQuestion].section}</h3>
            <h2>{Questions[currQuestion].section_name}</h2>
            <h1>{Questions[currQuestion].prompt}</h1>
          </LeftContent>
          <RightContent>
            {currQuestion === 0 && <TermsAgreement />}
            {currQuestion === 1 && <Q2 />}
            {currQuestion === 2 && <Q3 />}
            <Options
              options={Questions[currQuestion].options}
              currQuestionType={Questions[currQuestion].type}
            />
            <BackNextButtonContainer>
              <BackButton onClick={handleBackClick}>Back</BackButton>
              <NextButton isValid={isValid} onClick={handleNextClick}>
                Next
              </NextButton>
            </BackNextButtonContainer>
          </RightContent>
        </ContentContainer>
      </Content>
    </Background>
  );
};

export default Questionaire;
