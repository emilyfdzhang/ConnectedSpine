import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { validBlue, backGreyLight } from '../buttonStyles';

const background = '#fefefe';
const border = '#888';
const red = '#d0342c';

const Container = styled.div`
  display: ${(props) => (props.showAlert ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${background};
  border-radius: 10px;
  margin: 15% auto;
  border: 1px solid ${border};
  width: 40%;
  height: 30%;
`;

const Logo = styled.div`
  color: ${red};
  font-size: 50px;
  height: 25%;
  padding-bottom: 20px;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: large;
  padding-bottom: 5px;
`;

const Text = styled.p`
  height: 30%;
  width: 70%;
  text-align: center;
`;

const Button = styled.button`
  height: 15%;
  width: 20%;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  background-color: ${backGreyLight};
  border: none;
  border-radius: 5px;

  :hover {
    background-color: ${validBlue};
  }
`;

const Alert = ({ showAlert, setShowAlert, title, alert }) => {
  return (
    <Container showAlert={showAlert}>
      <Box>
        <Logo>
          <FontAwesomeIcon icon={faCircleExclamation} />
        </Logo>
        <Title>{title}</Title>
        <Text>{alert}</Text>
        <Button onClick={() => setShowAlert(false)}>OK</Button>
      </Box>
    </Container>
  );
};
export default Alert;
