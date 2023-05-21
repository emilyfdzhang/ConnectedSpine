import React, { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import { ResultDetails } from '../../helpers/RecommendedDetails';
import Header from '../Header';
import Providers from '../Recommend/Providers';
import { Background, Content } from '../../styles';

const Result = () => {
  const { answers } = useContext(AssessmentContext);
  const [resultIndex, setResultIndex] = useState([]);

  // if shooting pain, Lumbar Radiculopathy
  if (answers['06'].includes('SHOOTING PAIN')) {
    !resultIndex.includes(0) ? setResultIndex(resultIndex.concat(0)) : null;
  }

  // if pain on walking or leaning forward but not at rest or leaning backward, Lumbar Stenosis
  if (
    answers['07-subq-0'].includes('LEAN FORWARD') &&
    (!answers['07-subq-0'].includes('AM AT REST') ||
      !answers['07-subq-0'].includes('LEAN BACK'))
  ) {
    !resultIndex.includes(1) ? setResultIndex(resultIndex.concat(1)) : null;
  }

  console.log('resultIndex', resultIndex);
  resultIndex.map((index) => {
    console.log('diagnosis', ResultDetails[index]);
  });
  useEffect(() => {
    console.log('answers first', answers);
  }, [answers]);
  console.log('answers:', answers);
  return (
    <Background image="../../results.jpg">
      <Header />
      <Content>
        <Providers resultIndex={resultIndex} />
      </Content>
    </Background>
  );
};

export default Result;
