import React, { useState } from "react";
import AssessmentContext from '../../helpers/Contexts';
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
} from '../../styles';
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicInfoQuestions from "../../helpers/BasicInfoQuestions"
import TermsAgreement from "./TermsAgreement";
import './TermsAgreement.css';
import Q2 from "./Q2";
const BasicInfo = () => {
    const [currQuestion, setCurrQuestion] = useState(0)
    const { AssessmentState, setAssessmentState } = useContext(AssessmentContext)
    const handleBackClick = () => {

        if (currQuestion === 0) {
            setAssessmentState("zipcode")

        }
        else {
            setCurrQuestion(currQuestion - 1)
        }
    }
    const handleNextClick = () => {

        if (currQuestion === 5) {
            setAssessmentState("symptoms")

        }
        else {
            setCurrQuestion(currQuestion + 1)
        }
    }
    return (<Background image="../../public/Pages.jpg">
        <Header />
        <Content>
            <ContentContainer>
                <LeftContent>
                    <h3>Section 1</h3>
                    <h2>Basic Info</h2>
                    <h1>{BasicInfoQuestions[currQuestion].prompt}</h1>
                </LeftContent>
                <RightContent>
                    {currQuestion === 0 && <TermsAgreement />}
                    {currQuestion === 1 && <Q2 />}
                    <BackNextButtonContainer>
                        <BackButton onClick={handleBackClick}>Back</BackButton>
                        <NextButton onClick={handleNextClick}>
                            Next
                        </NextButton>
                    </BackNextButtonContainer>
                </RightContent>
            </ContentContainer>
        </Content>
    </Background >
    );


}

export default BasicInfo;