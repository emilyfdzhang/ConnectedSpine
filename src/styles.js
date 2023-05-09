import styled from 'styled-components';

export const mobile = `@media (max-width: 768px)`;

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
export const borderBlue = '#1d2556';

// Link
export const linkGrey = '#665e5b';

// Select Button
export const selected = '#3a49ac';
export const selectedBackground = 'rgba(58, 73, 172, 0.2)';

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.span`
  margin-top: 10vh;
  margin-left: 5vw;
  height: 80%;
`;

export const ContentContainer = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const RightContent = styled.span`
  width: 53%;
`;

export const LeftContent = styled.span`
  width: 47%;
`;
export const BackNextButtonContainer = styled.span`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
`;
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
  width: 80px;
  height: 40px;
  background-color: ${backGrey};
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
  font-weight: 600;
  text-transform: uppercase;
  color: ${borderBlue};
  width: 200px;
  height: 60px;
  padding: 10px 30px;
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

export const TextInput = styled.input`
  cursor: pointer;
  background: ${boxBackground};
  font-size: 20px;
  font-weight: 600;
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

export const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: ${linkGrey};
  cursor: pointer;
`;

export const Warning = styled.p`
  color: red;
  font-size: 10px;
  padding: 2px 10px;
`;
