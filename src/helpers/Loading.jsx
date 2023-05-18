import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Background } from '../styles';

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0px;
  padding-bottom: 10px;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 100;
  font-size: 30px;
  width: 535px;
`;

const LoadingDots = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length < 3) {
          return prevDots + '.';
        } else {
          return '.';
        }
      });
    }, 600);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SubTitle>
      Connecting you to the care you need
      {dots}
    </SubTitle>
  );
};

const Loading = () => {
  return (
    <Background image="../../results.jpg">
      <Content>
        <Title>ConnectedSpine</Title>
        <LoadingDots />
      </Content>
    </Background>
  );
};

export default Loading;
