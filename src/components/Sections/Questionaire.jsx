import React, { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import Header from '../Header';
import TermsAgreement from '../BasicInfo/TermsAgreement';
import Q2 from '../BasicInfo/Q2';
import Q3 from '../BasicInfo/Q3';
import Questions from '../../helpers/Questions';
import Options from '../QuestionTypes/Options';
import ProgressDots from '../../helpers/ProgressDots';
import styled from 'styled-components';
import {
  Background,
  Content,
  ContentContainer,
  RightContent,
  LeftContent,
  BackNextButtonContainer,
  Bold,
} from '../../styles';
import { NextButton, BackButton } from '../../buttonStyles';

const Section = styled.h3`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-transform: uppercase;
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: 100;
  line-height: 24px;
  text-transform: uppercase;
`;

const Prompt = styled.h1`
  margin-top: 20px;
  max-width: 80%;
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0px;
`;

const SubQuestion = styled.p`
  /* margin-top: -40px;
  margin-bottom: 40px; */
  max-width: 80%;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Questionaire = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [currSubQuestion, setCurrSubQuestion] = useState(0);

  const [idTrail, setIdTrail] = useState([]);

  const {
    AssessmentState,
    setAssessmentState,
    isValid,
    setIsValid,
    selectedOptions,
    setSelectedOptions,
    answers,
    setAnswers,
  } = useContext(AssessmentContext);

  const proceedSensationQuestion = (currentQuestion) => {
    // if SENSATION question, then navigate to questions based on these answers
    let index = currentQuestion + 1;
    console.log('answers new', answers);
    for (let i = currentQuestion + 1; i < Questions.length; i++) {
      if (
        currentQuestion + 1 > 9 &&
        Questions[currentQuestion + 1].qId.includes('06')
      ) {
        let filter;
        if (currentQuestion == 9) {
          filter = selectedOptions;
        } else {
          filter = answers['06'];
        }
        var qid = Questions[i].qId;
        console.log('qid', qid);
        qid = qid.split('-');
        const question = qid[1];
        for (let j = 0; j < filter.length; j++) {
          if (filter[j].includes(question)) {
            index = i;
            return index;
          } else {
            index = 25; // change index based on next question after sensations questions
          }
        }
      }
    }
    return index;
  };

  const handleBackClick = () => {
    if (currQuestion === 0) {
      setAssessmentState('zipcode');
    } else {
      let index;
      let tempIdTrail = [];
      const currId = Questions[currQuestion].qId;
      tempIdTrail = idTrail.concat(currId);
      console.log('tempIdTrail', tempIdTrail);
      console.log('currId', currId);

      if (Questions[currQuestion].sub_questions) {
        console.log('subquestions', Questions[currQuestion].sub_questions);
        console.log('current subquestion', currSubQuestion);
        if (currSubQuestion != 0) {
          setCurrSubQuestion(currSubQuestion - 1);
          return;
        }
      }

      for (let i = 0; i < tempIdTrail.length; i++) {
        if (tempIdTrail[i + 1] === currId) {
          const newLocationId = tempIdTrail[i];
          for (let j = 0; j < Questions.length; j++) {
            if (newLocationId === Questions[j].qId) {
              index = Questions[j].index;
              console.log('INDEX', index);
              setCurrQuestion(index);
              return;
            }
          }
        }
      }
    }
  };

  const handleNextClick = () => {
    if (
      // if last question
      (currQuestion === Questions.length - 1 &&
        Questions[currQuestion].sub_questions &&
        currSubQuestion === Questions[currQuestion].sub_questions.length - 1) ||
      (currQuestion === Questions.length - 1 &&
        !Questions[currQuestion].sub_questions)
    ) {
      if (Questions[currQuestion].sub_questions) {
        // if last question and subquestion
        var qid = `${Questions[currQuestion].qId}-subq-${currSubQuestion}`;
      } else {
        // if last question and not subquestion
        var qid = Questions[currQuestion].qId;
      }
      const currentAnswer = { ...answers, [qid]: selectedOptions };
      setAnswers(currentAnswer);
      if (!idTrail.includes(Questions[currQuestion].qId)) {
        setIdTrail([...idTrail, Questions[currQuestion].qId]);
      }
      setAssessmentState('result');
    } else if (isValid) {
      // if not last question
      setIsValid(false);
      if (
        // move onto next question
        !Questions[currQuestion].sub_questions ||
        currSubQuestion === Questions[currQuestion].sub_questions.length - 1
      ) {
        if (Questions[currQuestion].sub_questions) {
          var qid = `${Questions[currQuestion].qId}-subq-${currSubQuestion}`;
        } else {
          var qid = Questions[currQuestion].qId;
        }
        const currentAnswer = { ...answers, [qid]: selectedOptions };
        setAnswers(currentAnswer);
        if (!idTrail.includes(Questions[currQuestion].qId)) {
          setIdTrail([...idTrail, Questions[currQuestion].qId]);
        }

        const index = proceedSensationQuestion(currQuestion);
        setCurrQuestion(index);

        // setCurrQuestion(currQuestion + 1);
        setCurrSubQuestion(0);
        setSelectedOptions([]);
      } else {
        // move onto next subquestion
        var qid = `${Questions[currQuestion].qId}-subq-${currSubQuestion}`;
        const currentAnswer = { ...answers, [qid]: selectedOptions };
        console.log('selected options', selectedOptions);
        console.log('qid', qid);
        setAnswers(currentAnswer);
        if (!idTrail.includes(Questions[currQuestion].qId)) {
          setIdTrail([...idTrail, Questions[currQuestion].qId]);
        }

        // const index = proceedSensationQuestion(currQuestion);
        // if (currQuestion + 1 == index) {
        //   setCurrSubQuestion(currSubQuestion + 1);
        // } else {
        //   console.log('HERE');
        //   setCurrQuestion(index);
        // }
        setCurrSubQuestion(currSubQuestion + 1);

        // setCurrSubQuestion(currSubQuestion + 1);
        setSelectedOptions([]);
      }
    }
  };

  useEffect(() => {
    console.log('answers:', answers);
    console.log('idTrail', idTrail);
  }, [answers]);

  return (
    <Background image="../../pages.jpg">
      <Header />
      <Content>
        <ContentContainer>
          <LeftContent>
            <Section>Section {Questions[currQuestion].section}</Section>
            <Name>{Questions[currQuestion].section_name}</Name>
            <Prompt>{Questions[currQuestion].prompt}</Prompt>
          </LeftContent>
          <RightContent>
            {currQuestion === 0 && <TermsAgreement />}
            {currQuestion === 1 && <Q2 />}
            {currQuestion === 2 && <Q3 />}
            <OptionsContainer>
              {Questions[currQuestion].sub_questions && (
                <SubQuestion>
                  <Bold>
                    {Questions[currQuestion].sub_questions[currSubQuestion]}
                  </Bold>
                </SubQuestion>
              )}
              <Options
                currQuestion={currQuestion}
                currSubQuestion={currSubQuestion}
                subQuestion={Questions[currQuestion].sub_questions}
                options={Questions[currQuestion].options}
                currQuestionType={Questions[currQuestion].type}
              />
            </OptionsContainer>
            <BackNextButtonContainer>
              <BackButton onClick={handleBackClick}>Back</BackButton>
              <NextButton isValid={isValid} onClick={handleNextClick}>
                Next
              </NextButton>
            </BackNextButtonContainer>
          </RightContent>
        </ContentContainer>
        <ProgressDots currentStep={Questions[currQuestion].section - 1} />
      </Content>
    </Background>
  );
};

export default Questionaire;
