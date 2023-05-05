import {
    BackButton,
    Background,
    Content,
    NextButton,
    ContentContainer,
    RightContent,
    LeftContent,
  } from '../styles';
  import Header from '../components/Header';
  import './IntroQ2.css';
  import { useState } from 'react';
  
  const IntroQ2 = () => {
    
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
              <BackButton>Back</BackButton>
              <NextButton>Next</NextButton>
            </RightContent>
          </ContentContainer>
        </Content>
      </Background>
    );
  };
  export default IntroQ2;
  