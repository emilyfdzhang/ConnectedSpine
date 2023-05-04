import styled from 'styled-components';

export const mobile = `@media (max-width: 768px)`;

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
  margin-top: 20vh;
  margin-left: 5vw;
  height: 80%;
`;
