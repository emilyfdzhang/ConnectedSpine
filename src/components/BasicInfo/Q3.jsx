import { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import Modal from '../Modal';
import { RequireSex } from '../../helpers/Explanations';
import styled from 'styled-components';
import { Link, Warning } from '../../styles';
import { SelectButton, TextInput } from '../../buttonStyles';

const Container = styled.div`
  width: 70%;
  margin: -50px auto 0;
`;

const Sex = styled.div`
  margin-bottom: 15px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  margin-bottom: 20px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Q3 = () => {
  const { isValid, setIsValid } = useContext(AssessmentContext);
  const { selectedOptions, setSelectedOptions } = useContext(AssessmentContext);
  const { answers, setAnswers } = useContext(AssessmentContext);
  const [showModal, setShowModal] = useState(false);
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');

  const handleButtonClick = (choice) => {
    setSex(choice);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    if (sex && height && weight && age) {
      setSelectedOptions({
        sex: sex,
        height: height,
        weight: weight,
        age: age,
      });
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    if (answers['basic-info']) {
      const currAnswer = answers['basic-info'];
      if (sex && sex != currAnswer['sex']) {
        setSex(sex);
      } else {
        setSex(currAnswer['sex']);
      }
      if (height && height != currAnswer['height']) {
        setHeight(height);
      } else {
        setHeight(currAnswer['height']);
      }
      if (weight && weight != currAnswer['weight']) {
        setWeight(weight);
      } else {
        setWeight(currAnswer['weight']);
      }
      if (age & (age != currAnswer['age'])) {
        setAge(age);
      } else {
        setAge(currAnswer['age']);
      }
    }
  }, [sex, height, weight, age, setIsValid]);

  function formatHeight(height) {
    const feet = Math.floor(height / 12);
    const inches = height % 12;
    return `${feet} ft ${inches} in`;
  }

  return (
    <Container>
      <Sex>
        <Label>Sex (Assigned at birth)</Label>
        <div>
          <SelectButton
            selected={sex === 'male'}
            onClick={() => handleButtonClick('male')}
          >
            Male
          </SelectButton>
          <SelectButton
            selected={sex === 'female'}
            onClick={() => handleButtonClick('female')}
          >
            Female
          </SelectButton>
        </div>
      </Sex>
      <Link onClick={() => setShowModal(true)}>Why do we ask this?</Link>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        text={RequireSex}
      ></Modal>
      <Body>
        <div>
          <Label>Height</Label>
          <TextInput
            type="text"
            placeholder="ft in"
            value={height}
            onChange={handleHeightChange}
          />
          {isValid ? <></> : <Warning>* Please enter a valid height</Warning>}
        </div>
        <div>
          <Label>Weight</Label>
          <TextInput
            type="text"
            placeholder="lbs"
            value={weight}
            onChange={handleWeightChange}
          />
          {Number.isInteger(parseInt(weight)) && parseInt(weight) > 0 ? (
            <></>
          ) : (
            <Warning>* Please enter a valid weight</Warning>
          )}
        </div>
      </Body>
      <div>
        <Label>Age</Label>
        <div>
          <TextInput
            type="text"
            placeholder="years"
            value={age}
            onChange={handleAgeChange}
          />
          {Number.isInteger(parseInt(age)) && parseInt(age) > 0 ? (
            <></>
          ) : (
            <Warning>* Please enter a valid age</Warning>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Q3;
