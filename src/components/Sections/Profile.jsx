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

const Profile = () => {
  const { setAssessmentState } = useContext(AssessmentContext);
  const user = getAuth().currentUser;

  return (
    <Background image="../../results.jpg">
      <Header />
      Profile Page
      <Content>
        <ContentContainer>
          <LeftContent>{user['email']} : Past Assessments</LeftContent>
          <RightContent>
            <FeedbackForm user={user} />
          </RightContent>
        </ContentContainer>
      </Content>
    </Background>
  );
};

export default Profile;
