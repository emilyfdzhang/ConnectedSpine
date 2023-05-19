import { useState, useContext } from 'react';
import { auth } from '../../utilities/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AssessmentContext from '../../helpers/Contexts';
import Header from '../Header';
import Modal from '../Modal';
import { RequireSignIn } from '../../helpers/Explanations';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import {
  cardBackground,
  boxBackground,
  backGreyLight,
  boxShadow,
  Background,
  Content,
  Link,
  BackButton,
  BackNextButtonContainer,
} from '../../styles';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -25px auto;
  padding: 30px;
  width: 30%;
  height: 90%;
  background-color: ${cardBackground};
  border-radius: 15px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  padding-bottom: 10px;
`;

const StyledInput = styled(TextField)`
  && {
    margin-bottom: 20px;
    width: 80%;
  }
`;

const Button = styled.button`
  width: 90%;
  min-height: 40px;
  margin-top: 40px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
  font-weight: 300;
  background-color: ${boxBackground};
  box-shadow: ${boxShadow};

  :hover {
    background-color: ${backGreyLight};
  }
`;

const SignUp = styled.div`
  width: 50%;
  margin-top: 50px;
  text-align: center;

  p {
    margin-bottom: 5px;
    font-size: smaller;
  }

  a {
    text-transform: uppercase;
    font-weight: 300;
    cursor: pointer;
    :hover {
      font-weight: 400;
    }
  }
`;

const Login = () => {
  const { setAssessmentState } = useContext(AssessmentContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
    } catch (error) {
      alert('Username or password is incorrect');
      return;
    }
    setAssessmentState('zipcode');
  };

  return (
    <Background image="../../results.jpg">
      <Header />
      <Content>
        <Box>
          <Title>Login</Title>
          <StyledInput
            required
            id="standard-basic"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            required
            id="standard-basic"
            label="Password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Login</Button>
          <Link onClick={() => setShowModal(true)}>
            Why do we require this?
          </Link>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            text={RequireSignIn}
          />
          <SignUp>
            <p>Or Sign Up Using</p>
            <a
              onClick={() => {
                setAssessmentState('signup');
              }}
            >
              Sign up
            </a>
          </SignUp>
        </Box>
        <BackNextButtonContainer>
          <BackButton
            onClick={() => {
              setAssessmentState('home');
            }}
          >
            Back
          </BackButton>
        </BackNextButtonContainer>
      </Content>
    </Background>
  );
};

export default Login;
