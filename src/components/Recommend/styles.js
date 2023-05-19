import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 60%;
  margin-top: -90px;
`;

export const Subtitle = styled.h2`
  font-weight: 200;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.12px;
  color: rgba(0, 0, 0, 0.87);
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
`;

export const Recomendation = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const Recomended = styled.h3`
  float: left;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 40px;
  margin-bottom: 15px;
`;

export const Cards = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Save = styled.div`
  width: 100%;
  height: 89px;
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    width: 40%;
    margin: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
  }
`;
