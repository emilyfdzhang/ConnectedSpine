import styled from 'styled-components';

export const mobile = `@media (max-width: 768px)`;

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

  :hover{
    background-color: ${validBlue};
    color: white;
  }
`;

export const SelectButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  padding: 10px 30px;
  border-radius: 8px;
  background-color: white;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 200px;
  height: 60px;

  &:hover {
    background-color: rgba(128, 0, 128, 0.8);
    color: white;
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
