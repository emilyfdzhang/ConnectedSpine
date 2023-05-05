import {
  BackButton,
  Background,
  Content,
  NextButton,
  ContentContainer,
  RightContent,
  LeftContent,
  BackNextButtonContainer
} from '../styles';
import Header from '../components/Header';
import './IntroQ2.css';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

const Card = ({ person }) => {
  return (<div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card card-square">
          <div class="card-body text-center">
            <button class="btn btn-light btn-large"> Myself</button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card card-square">
          <div class="card-body text-center">
            <button class="btn btn-light btn-large"> Someone Else</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
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
            <Card ></Card>
            <BackNextButtonContainer>
              <BackButton>Back</BackButton>
              <NextButton>Next</NextButton>
            </BackNextButtonContainer>
          </RightContent>
        </ContentContainer>
      </Content>
    </Background>
  );
};
export default IntroQ2;
