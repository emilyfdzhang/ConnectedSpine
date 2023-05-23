import { useState, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import { auth } from '../../utilities/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Header from '../Header';
import Modal from '../Modal';
import Alert from '../Alert';
import LoginTextField from '../LoginTextField';
import { Terms, Privacy } from '../../helpers/Explanations';
import styled from 'styled-components';
import { Background, Content, LoginBox } from '../../styles';
import { LoginButton } from '../../buttonStyles';

const Bold = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 300;
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

const Account = styled.p`
  padding-bottom: 20px;
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
  padding-bottom: 15px;
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
  const [showPassword, setShowPassword] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [alert, setAlert] = useState('');
  const [title, setTitle] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAssessmentState('zipcode');
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setShowAlert(true);
          setAlert(
            'Email is registered to another user. If this is your email, please log in.'
          );
          setTitle('Invalid Email');
          break;
        case 'auth/invalid-email':
          setShowAlert(true);
          setAlert('Email is invalid. Please sign up with a valid email.');
          setTitle('Invalid Email');
          break;
        case 'auth/operation-not-allowed':
          setShowAlert(true);
          setAlert('Please try again.');
          setTitle('Error');
          break;
        case 'auth/weak-password':
          setShowAlert(true);
          setAlert(
            'Password is not strong enough. Add additional characters.'
          );
          setTitle('Invalid Password');
          break;
        default:
         setShowAlert(true);
         setAlert('Please enter a valid email and password.');
         setTitle('Error');
          break;
      }
    }
  };

  return (
    <Background image="../../results.jpg">
      <Header />
      <Content>
        <LoginBox login={0}>
          <Title>Sign Up For ConnectedSpine</Title>
          <Account>
            Create a free account or{' '}
            <Bold
              onClick={() => {
                setAssessmentState('login');
              }}
            >
              Log In
            </Bold>
          </Account>
          <LoginTextField
            login={0}
            email={email}
            changeEmail={(e) => setEmail(e.target.value)}
            password={password}
            changePassword={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            changeShowPassword={() => setShowPassword(!showPassword)}
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
          <LoginButton login={0} onClick={handleSignUp}>
            Sign Up
          </LoginButton>
          <Alert
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            title={title}
            alert={alert}
          ></Alert>
        </LoginBox>
      </Content>
    </Background>
  );
};

export default SignUp;
