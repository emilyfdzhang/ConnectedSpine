import { useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import Header from '../Header';
import styled from 'styled-components';
import {
  Background,
  Content,
  ContentContainer,
  LeftContent,
  RightContent,
} from '../../styles';
import FeedbackForm from '../FeedbackForm';
import { getAuth } from 'firebase/auth';
import { useDbUpdate } from '../../utilities/firebase';

const Section = styled.h3`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-transform: uppercase;
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: 100;
  line-height: 24px;
  text-transform: uppercase;
`;

const Prompt = styled.h1`
  margin-top: 20px;
  max-width: 80%;
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 0px;
`;

const Profile = () => {
  const { setAssessmentState } = useContext(AssessmentContext);
  const user = getAuth().currentUser;

  return (
    <Background image="../../results.jpg">
      <Header />
      <Content>
        <ContentContainer>
          <LeftContent>
            <Section>Profile Page</Section>
            <Name>{user['email']}</Name>
            <Prompt>Provide feedback on ConnectedSpine's process</Prompt>
            <br />
            {/* Past responses, diagnosis, and providers can be implemented here
            later */}
          </LeftContent>
          <RightContent>
            <FeedbackForm user={user} />
          </RightContent>
        </ContentContainer>
      </Content>
    </Background>
  );
};

export default Profile;
