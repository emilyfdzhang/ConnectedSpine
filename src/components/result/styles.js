import styled from "styled-components";

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

export const Card = styled.div`
  display: flex;
  width: 352px;
  height: 232px;
  background: rgba(255, 255, 255, 0.61);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 3px 5px -1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  font-size: 40px;
  margin-top: 10%;
  color: #8992cd;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 10%;
  background-color: lightgrey;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  a {
    margin-left: -30%;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    text-align: center;
    letter-spacing: 1.07143px;
    text-transform: uppercase;

    color: #1d2556;
    margin-top: 3px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  margin-left: 10%;
  margin-bottom: 0;
  margin-right: 10%;
`;

export const Provider = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.18px;
  color: rgba(0, 0, 0, 0.87);
`;

export const Button = styled.button`
  background: #3a49ac;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.299798);
  border: none;
  border-radius: 4px;
  width: 80%;
  height: 20%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: #ffffff;
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