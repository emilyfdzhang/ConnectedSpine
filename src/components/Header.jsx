import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRefresh, faX } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import AssessmentContext from '../helpers/Contexts';

const Heading = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 65px;
  font-size: 20px;
  height: 20%;
`;

const Nav = styled.span`
  display: flex;
  align-items: center;
  p {
    padding-left: 10px;
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  letter-spacing: 1px;
`;

const Bar = styled.div`
  height: 100%;
  width: ${(props) => (props.isOpen ? '250px' : '0')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  color: black;

  button {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 20px;
    margin-left: 50px;
    background: none;
    border: none;
  }

  a {
    cursor: pointer;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    color: black;
    display: block;
    transition: 0.3s;
  }
`;

const Header = () => {
  const { setAssessmentState } = useContext(AssessmentContext);

  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function handleButtonClicks(page) {
    if (isOpen) {
      toggleSidebar();
    }
    setAssessmentState(page);
  }

  return (
    <Heading>
      <Nav>
        <Button onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <p>ConnectedSpine</p>
      </Nav>
      <Button
        onClick={() => {
          setAssessmentState('home');
        }}
      >
        <FontAwesomeIcon icon={faRefresh} />
      </Button>
      <Bar isOpen={isOpen}>
        <button onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <a onClick={handleButtonClicks.bind(null, 'home')}>Profile</a>
        <a onClick={handleButtonClicks.bind(null, 'home')}>Assessment</a>
      </Bar>
    </Heading>
  );
};

export default Header;
