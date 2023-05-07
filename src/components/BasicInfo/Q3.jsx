import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaUsers } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import AssessmentContext from '../../helpers/Contexts';
import { useContext } from 'react';
import styled from 'styled-components';

const Label = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const SpecialButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  padding: 10px 30px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 200px;
  height: 60px;

  &:hover {
    background-color: rgba(128, 0, 128, 0.8);
    color: #ffffff;
  }
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

  return (
    <div>
      <Label style={{ paddingLeft: '20%', marginBottom: '15px' }}>
        Sex (Assigned at birth)
      </Label>
      <div class="container d-flex justify-content-center">
        <SpecialButton>Male</SpecialButton>
        <SpecialButton>Female</SpecialButton>
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
          <div style={{ marginRight: '165px' }}>Height</div>
          <div>Weight</div>
        </Label>
        <div class="container d-flex justify-content-center">
          <TextInput type="text" placeholder="  ft in" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextInput type="text" placeholder="  lbs" />
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
          <div class="container d-flex justify-content-center">
            <TextInput type="text" placeholder="  years" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q3;
