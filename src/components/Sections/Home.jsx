import { useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import Header from '../Header';
import styled from 'styled-components';
import {
  boxShadow,
  boxBackground,
  boxBorder,
  borderBlue,
  Bold,
  Background,
  Content,
} from '../../styles';

const Title = styled.div`
  max-width: 600px;

  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 55px;
    line-height: 49px;
    letter-spacing: 0px;
    padding-bottom: 10px;
  }

  p {
    font-weight: 200;
    line-height: 22px;
    max-width: 500px;
  }
`;

const Instructions = styled.div`
  margin-top: 13vh;

  button {
    margin-top: 15px;
    text-align: center;
    text-transform: uppercase;
    width: 235px;
    height: 48px;
    background: ${boxBackground};
    border: ${boxBorder};
    box-shadow: ${boxShadow};
    border-radius: 4px;
    color: ${borderBlue};
  }

  p {
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  font-weight: 100;
`;

const Home = () => {
  const { AssessmentState, setAssessmentState } = useContext(AssessmentContext);
  return (
    <Background image="../../homepage.jpg">
      <Header />
      <Content>
        <Title>
          <h1>We connect you to the care you need.</h1>
          <p>
            ConnectedSpine uses the knowledge of spine care specialists to guide
            you to the right providers.
          </p>
        </Title>
        <Instructions>
          <Text>Experiencing pain or discomfort in your back or neck?</Text>
          <p>
            <Bold>Take our 5 min assessment.</Bold>
          </p>
          <button
            onClick={() => {
              setAssessmentState('login-signup');
            }}
          >
            Start Assessment
          </button>
        </Instructions>
      </Content>
    </Background>
  );
};

export default Home;
