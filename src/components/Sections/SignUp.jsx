import { useState, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import { auth } from '../../utilities/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Header from '../Header';
import Modal from '../Modal';
import { Terms, Privacy } from '../../helpers/Explanations';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import {
  cardBackground,
  boxBackground,
  backGreyLight,
  boxShadow,
  Background,
  Content,
} from '../../styles';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -60px auto;
  padding: 30px;
  width: 50%;
  height: 100%;
  border-radius: 10px;
  background-color: ${cardBackground};
`;

const Bold = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;

  :hover {
    color: black;
    font-weight: 400;
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 0;
`;

const StyledInput = styled(TextField)`
  && {
    width: 80%;
    padding-bottom: 20px;
    padding-top: 10px;
  }
`;

const Check = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  font-size: 12px;

  input[type='checkbox'] {
    margin-right: 10px;
    margin-left: 5px;
    transform: scale(1.2);
  }
`;

const Agree = styled.p`
  width: 80%;
  padding-top: 20px;
`;

const Button = styled.button`
  width: 90%;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: ${boxBackground};
  box-shadow: ${boxShadow};
  font-weight: 300;
  text-transform: uppercase;

  :hover {
    background-color: ${backGreyLight};
  }
`;

const Link = styled.a`
  color: black;
  text-decoration: underline;

  :hover {
    cursor: pointer;
    color: black;
  }
`;

const SignUp = () => {
  const { setAssessmentState } = useContext(AssessmentContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log('New user created:', user);
    } catch (error) {
      console.error(error);
    }
    setAssessmentState('zipcode');
  };

  return (
    <Background image="../../results.jpg">
      <Header />
      <Content>
        <Box>
          <Title>Sign Up For ConnectedSpine</Title>
          <p>
            Create a free account or{' '}
            <Bold
              onClick={() => {
                setAssessmentState('login');
              }}
            >
              Log In
            </Bold>
          </p>
          <StyledInput
            required
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            required
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Check>
            <input type="checkbox"></input>
            <span>
              I don't want to recieve emails about ConnectedSpine and related
              product and feature updates, and promotions from ConnectedSpine.
            </span>
          </Check>
          <Agree>
            By creating an account, you agree to our{' '}
            <Link onClick={() => setShowTerms(true)}>Terms</Link> and have read
            and acknowledged the{' '}
            <Link onClick={() => setShowPrivacy(true)}>Privacy Statement</Link>.
          </Agree>
          <Modal
            showModal={showTerms}
            setShowModal={setShowTerms}
            text={Terms}
          ></Modal>
          <Modal
            showModal={showPrivacy}
            setShowModal={setShowPrivacy}
            text={Privacy}
          ></Modal>
          <Button onClick={handleSignUp}>Sign Up</Button>
        </Box>
      </Content>
    </Background>
  );
};

export default SignUp;
