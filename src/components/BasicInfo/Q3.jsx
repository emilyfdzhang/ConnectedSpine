import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaUsers } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import AssessmentContext from '../../helpers/Contexts';
import { useContext } from 'react';
import styled from 'styled-components';
import { SelectButton } from '../../styles';

const Label = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const TextInput = styled.input`
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  margin-right: 10px;
  border: 2px solid #000000;
  background-color: #ffffff;
  color: #000000;
  transition: all 0.3s ease;
  width: 200px;
  height: 60px;

  &:hover,
  &:focus {
    background-color: rgba(128, 0, 128, 0.1);
    outline: none;
  }
`;

const Q3 = () => {
  const { isValid, setIsValid } = useContext(AssessmentContext);

  const [maleButton, setMaleButton] = useState(false);
  const [femaleButton, setFemaleButton] = useState(false);

  const [heightInput, setHeightInput] = useState('');
  const handleHeightInputChange = (event) => {
    setHeightInput(event.target.value);
  };

  const [weightInput, setWeightInput] = useState('');
  const handleWeightInputChange = (event) => {
    setWeightInput(event.target.value);
  };

  const [ageInput, setAgeInput] = useState('');
  const handleAgeInputChange = (event) => {
    setAgeInput(event.target.value);
  };

  const maleButtonClick = () => {
    setMaleButton((prevMaleButton) => !prevMaleButton);
    setFemaleButton(false); // reset the other button state
  };
  const femaleButtonClick = () => {
    setFemaleButton((prevFemaleButton) => !prevFemaleButton);
    setMaleButton(false); // reset the other button state
  };

  useEffect(() => {
    if (
      ((maleButton && !femaleButton) || (!maleButton && femaleButton)) &&
      heightInput &&
      weightInput &&
      ageInput
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [maleButton, femaleButton, heightInput, weightInput, ageInput]);

  return (
    <div>
      <Label style={{ paddingLeft: '20%', marginBottom: '15px' }}>
        Sex (Assigned at birth)
      </Label>
      <div className="container d-flex justify-content-center">
        <SelectButton
          onClick={maleButtonClick}
          style={{
            backgroundColor: maleButton ? 'rgba(128, 0, 128, 0.8)' : null,
          }}
        >
          Male
        </SelectButton>
        <SelectButton
          onClick={femaleButtonClick}
          style={{
            backgroundColor: femaleButton ? 'rgba(128, 0, 128, 0.8)' : null,
          }}
        >
          Female
        </SelectButton>
      </div>
      <br />
      <div>
        <Label
          style={{
            paddingLeft: '20%',
            marginBottom: '15px',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ marginRight: '165px' }}>Height and Weight</div>
        </Label>
        <div className="container d-flex justify-content-center">
          <TextInput
            type="text"
            placeholder="  ft in"
            value={heightInput}
            onChange={handleHeightInputChange}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextInput
              type="text"
              placeholder="  lbs"
              value={weightInput}
              onChange={handleWeightInputChange}
            />
            <div style={{ marginTop: '-20px', paddingLeft: '5px' }}></div>
          </div>
        </div>{' '}
        <br />
        <div>
          <Label
            style={{
              paddingLeft: '20%',
              marginBottom: '15px',
              alignItems: 'flex-end',
            }}
          >
            <div style={{ marginRight: '165px' }}>Age</div>
          </Label>
          <div className="container d-flex justify-content-center">
            <TextInput
              type="text"
              placeholder="  years"
              value={ageInput}
              onChange={handleAgeInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q3;
