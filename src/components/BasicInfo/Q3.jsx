import { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import styled from 'styled-components';
import { SelectButton, TextInput, Link, Warning } from '../../styles';

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
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
`;

const Q3 = () => {
  const { isValid, setIsValid } = useContext(AssessmentContext);
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');

  const handleButtonClick = (choice) => {
    setSex(choice);
  };

  useEffect(() => {
    if (sex && height && weight && age) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [sex, height, weight, age, setIsValid]);

  function formatHeight(height) {
    const feet = Math.floor(height / 12);
    const inches = height % 12;
    return `${feet} ft ${inches} in`;
  }

  const handleHeight(event) => {
    setHeight(event.target.value)
  };

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
      <Link>Why do we ask this?</Link>
      <Body>
        <div>
          <Label>Height</Label>
          <TextInput
            type="text"
            placeholder="ft in"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
          {isValid ? <></> : <Warning>* Please enter a valid height</Warning>}
        </div>
        <div>
          <Label>Weight</Label>
          <TextInput
            type="text"
            placeholder="lbs"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
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
            onChange={(event) => setAge(event.target.value)}
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
