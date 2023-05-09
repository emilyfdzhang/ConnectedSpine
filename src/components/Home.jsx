import { useContext } from 'react';
import AssessmentContext from '../helpers/Contexts';
import Header from './Header';
import styled from 'styled-components';
import {
  boxShadow,
  boxBackground,
  boxBorder,
  Background,
  Content,
} from '../styles';

const Title = styled.div`
  max-width: 600px;

  h1 {
    font-weight: 400;
    font-size: 55px;
    line-height: 49px;
    letter-spacing: 0px;
    padding-bottom: 10px;
  }

  p {
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
    color: #1d2556;
  }
`;

const Home = () => {
  const { AssessmentState, setAssessmentState } = useContext(AssessmentContext);
  return (
    <Background image="../../dist/HomepageSlim.jpg">
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
          <p>Experiencing pain or discomfort in your back or neck?</p>
          <p>
            <strong>Take our 5 min assessment.</strong>
          </p>
          <button
            onClick={() => {
              setAssessmentState('zipcode');
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
