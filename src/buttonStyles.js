import styled from 'styled-components';

// All Button
export const boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.2)';
export const boxBackground = 'rgba(255, 255, 255, 0.8)';
export const boxBorder = '1px solid rgba(0, 0, 0, 0.12)';

// Next Button
export const validBlue = '#3a49ac';
export const disabledGrey = '#f2f2f2';
export const darkGrey = '#b3b3b3';
export const borderGrey = '#b3acaa';

// Back Button
export const backGrey = '#979797';
export const backGreyLight = 'rgba(179, 172, 170, 0.5)';
export const borderBlue = '#1d2556';

// Select Button
export const selected = '#3a49ac';
export const selectedBackground = 'rgba(58, 73, 172, 0.2)';

export const NextButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: ${(props) => (props.isValid ? validBlue : disabledGrey)};
  color: ${(props) => (props.isValid ? 'white' : darkGrey)};
  border: ${(props) => (props.isValid ? 'none' : `1px solid ${borderGrey}`)};
  border-radius: 4px;
  cursor: ${(props) => (props.isValid ? 'pointer' : 'default')};
  text-transform: uppercase;
`;

export const BackButton = styled.button`
  min-width: 80px;
  height: 40px;
  padding: 2px;
  background-color: ${backGreyLight};
  color: ${borderBlue};
  border: 1px solid ${borderBlue};
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  margin-right: 10px;

  :hover {
    background-color: ${validBlue};
    color: white;
  }
`;

export const SelectButton = styled.button`
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
  margin-right: 10px;
  border: ${boxBorder};
  box-shadow: ${boxShadow};
  border-radius: 8px;
  transition: all 0.3s ease;
  ${(props) =>
    props.selected &&
    `
      border: 1px solid ${selected};
    `}
  background-color: ${(props) =>
    props.selected ? selectedBackground : 'white'};

  &:hover {
    background-color: ${selectedBackground};
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width: 90%;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: ${boxBackground};
  box-shadow: ${boxShadow};
  font-weight: 300;
  text-transform: uppercase;
  font-size: 15px;

  :hover {
    background-color: ${backGreyLight};
  }

  ${(props) =>
    props.login &&
    `
      min-height: 40px;
      height: 40px;
      margin-top: 40px;
      margin-bottom: 10px;
      border-radius: 20px;
  `}
`;

export const TextInput = styled.input`
  cursor: pointer;
  background: ${boxBackground};
  font-size: 20px;
  font-weight: 300;
  color: black;
  width: 200px;
  height: 60px;
  padding: 10px 30px;
  margin-right: 10px;
  border: ${boxBorder};
  box-shadow: ${boxShadow};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover,
  :focus {
    background-color: ${selectedBackground};
    outline: none;
  }
`;
