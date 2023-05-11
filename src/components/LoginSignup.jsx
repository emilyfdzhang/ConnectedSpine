import { useState, useContext } from 'react';
import AssessmentContext from '../helpers/Contexts';
import Header from './Header';
import styled from 'styled-components';
import {
  boxShadow,
  boxBackground,
  boxBorder,
  borderBlue,
  Bold,
  Background,
  Content,
} from '../styles';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { SelectButton } from '../styles';
import { auth } from '../utilities/firebase';

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

const Button = styled.button`
  cursor: pointer;
  background: ${boxBackground};
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${borderBlue};
  height: ${(props) => props.height || '60px'};
  width: 200px;
  padding: 10px 30px;
  margin: 0 auto;
  margin-top: 30px;
  border: ${boxBorder};
  box-shadow: ${boxShadow};
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: green;
    outline: none;
  }
`;

const SignUp = ({ setButton }) => {
  const { AssessmentState, setAssessmentState } = useContext(AssessmentContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

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
    setAssessmentState('home');
  };

  return (
    <Background image="../../homepage.jpg">
      <Button onClick={() => setButton('')}>Go Back</Button>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        Sign Up
      </h1>
      <form
        onSubmit={handleSignUp}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </Background>
  );
};

const Login = ({ setButton }) => {
  const { AssessmentState, setAssessmentState } = useContext(AssessmentContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(`user login: ${user.email}`);
    } catch (error) {
      console.error(error);
      alert('Username or password is incorrect');
      return;
    }
    setAssessmentState('home');
  };

  return (
    <Background image="../../homepage.jpg">
      <Button onClick={() => setButton('')}>Go Back</Button>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}
      >
        Login
      </h1>
      <form
        onSubmit={handleLogin}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </Background>
  );
};

const LoginSignup = () => {
  const [button, setButton] = useState('');

  return (
    <Background image="../../homepage.jpg">
      {button === '' ? (
        <Button onClick={() => setButton('signup')}>Sign Up</Button>
      ) : null}
      {button === '' ? (
        <Button onClick={() => setButton('login')}>Login</Button>
      ) : null}
      {button === 'signup' ? <SignUp setButton={setButton} /> : null}
      {button === 'login' ? <Login setButton={setButton} /> : null}
    </Background>
  );
};

export default LoginSignup;
