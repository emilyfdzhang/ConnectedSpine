import React, { useState } from "react";
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
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicInfoQuestions from "../helpers/BasicInfoQuestions"
const BasicInfo = () => {
    const [currQuestion, setCurrQuestion] = useState(0)
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
                    <BackNextButtonContainer>
                        <BackButton >Back</BackButton>
                        <NextButton onClick={() => setCurrQuestion(currQuestion + 1)}>
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