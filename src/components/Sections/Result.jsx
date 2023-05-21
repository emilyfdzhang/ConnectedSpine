import React, { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import Header from '../Header';
import Providers from '../Recommend/Providers';
import { Background, Content } from '../../styles';

const Result = () => {
  const { answers } = useContext(AssessmentContext);
  [resultIndex, setResultIndex] = useState([]) 
  if(answers["06"].includes("SHOOTING PAIN")) {
      setResultIndex([...resultIndex, 0])
  }
  if(answers["07"].includes("LEAN FORWARD") && (!answers["07"].includes("AM AT REST")) || (!answers["07"].includes("LEAN BACK"))) {
    setResultIndex([...resultIndex, 1])
  }
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
