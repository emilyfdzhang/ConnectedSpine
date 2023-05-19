import styled from 'styled-components';

export const mobile = `@media (max-width: 768px)`;

export const Bold = styled.span`
  font-weight: 400;
`;

// Question Types
export const underline = '#ccc6c4';

// Card
export const cardBackground = 'rgba(255, 255, 255, 0.61)';
export const cardBoxShadow =
  '0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2);';
export const iconPurple = '#8992cd';

// Link
export const linkGrey = '#665e5b';

export const Background = styled.div`
  background-image: ${(props) => `url(${props.image})`};
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

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -60px auto;
  padding: 30px;
  width: 50%;
  height: 80%;
  border-radius: 10px;
  background-color: ${cardBackground};

  ${(props) =>
    props.login &&
    `
    margin: -50px auto;
    width: 30%;
    height: 75%;
    border-radius: 15px;
  `}
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
