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
import SymptomQuestions from "../../helpers/SymptomQuestions";

const Symptom = () => {
    const [currQuestion, setCurrQuestion] = useState(0)
    const { AssessmentState, setAssessmentState } = useContext(AssessmentContext)
    const handleBackClick = () => {

        if (currQuestion === 0) {
            setAssessmentState("basicinfo")

        }
        else {
            setCurrQuestion(currQuestion - 1)
        }
    }
    const handleNextClick = () => {

        if (currQuestion === 0) {
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
                    <h3>Section 2</h3>
                    <h2>Symptoms</h2>
                    <h1>{SymptomQuestions[currQuestion].prompt}</h1>
                </LeftContent>
                <RightContent>
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

export default Symptom;