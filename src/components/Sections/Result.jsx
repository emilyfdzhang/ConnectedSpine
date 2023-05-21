import React, { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import Header from '../Header';
import Providers from '../Recommend/Providers';
import { Background, Content } from '../../styles';

const Result = () => {
  const { answers } = useContext(AssessmentContext);
  if(answers["06"].includes("SHOOTING PAIN")) {
      
  }
  resultIndex, (setResultIndex = useState([]));
  useEffect(() => {
    console.log('answers:', answers);
  }, [answers]);
  console.log('answers:', answers);
  return (
    <Background image="../../results.jpg">
      <Header />
      <Content>
        <Providers />
      </Content>
    </Background>
  );
};

export default Result;
