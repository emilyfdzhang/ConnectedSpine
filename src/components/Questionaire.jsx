import React, { useState } from "react";
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
import Questions from "../helpers/Questions"
import TermsAgreement from "./BasicInfo/TermsAgreement";
import "./BasicInfo/TermsAgreement.css";
import Q2 from "./BasicInfo/Q2";
const Questionaire = () => {
    const [currQuestion, setCurrQuestion] = useState(0)
    const { AssessmentState, setAssessmentState, isValid, setIsValid } = useContext(AssessmentContext)
    const handleBackClick = () => {

        if (currQuestion === 0) {
            setAssessmentState("zipcode")

        }
        else {
            setCurrQuestion(currQuestion - 1)
        }
    }
    const handleNextClick = () => {

        if (currQuestion === Questions.length - 1) {
            setAssessmentState("questions")

        }
        else if (isValid) {
            if (currQuestion < 1) {
                setIsValid(false)
            }
            setCurrQuestion(currQuestion + 1)
        }
    }
    return (<Background image="../../public/Pages.jpg">
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
                    <BackNextButtonContainer>
                        <BackButton onClick={handleBackClick}>Back</BackButton>
                        <NextButton isValid={isValid} onClick={handleNextClick} >
                            Next
                        </NextButton>
                    </BackNextButtonContainer>
                </RightContent>
            </ContentContainer>
        </Content>
    </Background >
    );


}

export default Questionaire;