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
  const [currSubQuestion, setCurrSubQuestion] = useState(0);
  const {
    AssessmentState,
    setAssessmentState,
    isValid,
    setIsValid,
    selectedOptions, setSelectedOptions
  } = useContext(AssessmentContext);
  const handleBackClick = () => {
    if (currQuestion === 0) {
      setAssessmentState('zipcode');
    } else {
      if (!Questions[currQuestion].sub_questions || currSubQuestion == 0) {
        setCurrQuestion(currQuestion - 1);
        if (Questions[currQuestion].sub_questions) {
          setCurrSubQuestion(Questions[currQuestion].sub_questions.length - 1)
        }
        else {
          setCurrSubQuestion(0)

        }
      }
      else {
        setCurrSubQuestion(currSubQuestion - 1);
      }
    }
  };
  const handleNextClick = () => {
    if (currQuestion === Questions.length - 1 && currSubQuestion === Questions[currQuestion].sub_questions.length - 1) {
      setAssessmentState('result');
    }

    else if (isValid) {
      //setSelectedButton(null);
      setIsValid(false);
      console.log(currQuestion)
      console.log(currSubQuestion)
      if (!Questions[currQuestion].sub_questions || currSubQuestion === Questions[currQuestion].sub_questions.length - 1) {
        setCurrQuestion(currQuestion + 1);
        setCurrSubQuestion(0);
        setSelectedOptions([])

      }
      else {
        setCurrSubQuestion(currSubQuestion + 1);
        setSelectedOptions([])
      }

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
            {Questions[currQuestion].sub_questions && <p><b>{Questions[currQuestion].sub_questions[currSubQuestion]}</b></p>}
            <div className='d-flex justify-content-center'>
              <Options
                currQuestion={currQuestion}
                options={Questions[currQuestion].options}
                currQuestionType={Questions[currQuestion].type}
              />
            </div>
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

export default Questionaire;
