import React, { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import { ResultDetails } from '../../helpers/RecommendedDetails';
import Header from '../Header';
import Providers from '../Recommend/Providers';
import { Background, Content } from '../../styles';

const Result = () => {
  const { answers } = useContext(AssessmentContext);
  const [resultIndex, setResultIndex] = useState([]);
  // [resultIndex, setResultIndex] = useState([]);
  // if (answers['06'].includes('SHOOTING PAIN')) {
  //   setResultIndex([...resultIndex, 0]);
  // }
  // if (
  //   (answers['07'].includes('LEAN FORWARD') &&
  //     !answers['07'].includes('AM AT REST')) ||
  //   !answers['07'].includes('LEAN BACK')
  // ) {
  //   setResultIndex([...resultIndex, 1]);
  // }
  // for (let i = 0; i < resultIndex.length; i++) {
  //   console.log(`diagnosis ${i}`, ResultDetails[i]);
  // }
  useEffect(() => {
    console.log('answers first', answers);
    if (answers['06'].includes('SHOOTING PAIN')) {
      setResultIndex([...resultIndex, 0]);
    }
    if (
      (answers['07-subq-0'].includes('LEAN FORWARD') &&
        !answers['07-subq-0'].includes('AM AT REST')) ||
      !answers['07-subq-0'].includes('LEAN BACK')
    ) {
      setResultIndex([...resultIndex, 1]);
    }
    for (let i = 0; i < resultIndex.length; i++) {
      console.log(`diagnosis ${i}`, ResultDetails[i]);
    }
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
