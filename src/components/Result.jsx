import Header from './Header';
import PhysicalTherapist from './result/PhysicalTherapist';
import { Background, Content } from '../styles';
import React, { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../helpers/Contexts';

const Result = () => {
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
  useEffect(() => {
    console.log('answers:', answers);
  }, [answers]);
  console.log('answers:', answers);
  return (
    <Background image="../../results.jpg">
      <Header />
      <Content>
        <PhysicalTherapist />
      </Content>
    </Background>
  );
};

export default Result;
