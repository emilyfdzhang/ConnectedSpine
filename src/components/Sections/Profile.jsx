import { useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import Header from '../Header';
import styled from 'styled-components';
import { Background, Content } from '../../styles';

const Profile = () => {
  const { setAssessmentState } = useContext(AssessmentContext);
  
  return (
    <Background image="../../results.jpg">
      <Header />
      <Content>Profile Page</Content>
    </Background>
  );
};

export default Profile;
