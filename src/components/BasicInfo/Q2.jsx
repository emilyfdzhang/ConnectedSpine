import { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import { IconContext } from 'react-icons';
import { FaUser, FaUsers } from 'react-icons/fa';
import styled from 'styled-components';

const textBlue = '#1d2556';
const iconPurple = '#8992CD';
const selected = '#3a49ac';
const selectedBackground = 'rgba(58, 73, 172, 0.2)';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  width: 167px;
  height: 184px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.25px;
  font-size: 16px;
  line-height: 16px;
  color: ${textBlue};
  border: none;

  ${(props) =>
    props.selected &&
    `
      border: 1px solid ${selected};
    `}
  background-color: ${(props) =>
    props.selected ? selectedBackground : 'white'};

  & svg {
    margin-bottom: 30px;
  }
`;

const Q2 = () => {
  const [usage, setUsage] = useState('');
  const { isValid, setIsValid } = useContext(AssessmentContext);

  const handleButtonClick = (choice) => {
    setUsage(choice);
  };

  useEffect(() => {
    if (usage) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [usage, setIsValid]);

  return (
    <Container>
      <IconContext.Provider value={{ color: `${iconPurple}`, size: '50px' }}>
        <Button
          selected={usage === 'myself'}
          onClick={() => handleButtonClick('myself')}
        >
          <FaUser />
          Myself
        </Button>
      </IconContext.Provider>
      <IconContext.Provider value={{ color: `${iconPurple}`, size: '70px' }}>
        <Button
          selected={usage === 'others'}
          onClick={() => handleButtonClick('others')}
        >
          <FaUsers />
          Someone Else
        </Button>
      </IconContext.Provider>
    </Container>
  );
};

export default Q2;
