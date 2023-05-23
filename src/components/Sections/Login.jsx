import { useState, useContext } from 'react';
import { auth } from '../../utilities/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AssessmentContext from '../../helpers/Contexts';
import Header from '../Header';
import Modal from '../Modal';
import Alert from '../Alert';
import LoginTextField from '../LoginTextField';
import { RequireSignIn } from '../../helpers/Explanations';
import styled from 'styled-components';
import {
  Background,
  Content,
  Link,
  BackNextButtonContainer,
  LoginBox,
} from '../../styles';
import { BackButton, LoginButton } from '../../buttonStyles';

const Title = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  padding-bottom: 10px;
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
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState('');
  const [title, setTitle] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAssessmentState('zipcode');
    } catch (error) {
      setShowAlert(true);
      setAlert('Please enter a correct email and password.');
      setTitle('Error');
      return;
    }
  };

  return (
    <Background image="../../results.jpg">
      <Header />
      <Content>
        <LoginBox login={1}>
          <Alert
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            title={title}
            alert={alert}
          ></Alert>
          <Title>Login</Title>
          <LoginTextField
            login={1}
            email={email}
            changeEmail={(e) => setEmail(e.target.value)}
            password={password}
            changePassword={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            changeShowPassword={() => setShowPassword(!showPassword)}
          />
          <LoginButton login={1} onClick={handleLogin}>
            Login
          </LoginButton>
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
        </LoginBox>
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
