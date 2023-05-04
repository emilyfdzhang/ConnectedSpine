import styled from 'styled-components';
import { Background, Content } from '../styles';
import Header from '../components/Header';

const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  max-width: 50%;
`;

const Form = styled.form`
  margin-top: 30px;
`;

const Input = styled.div`
  margin: 10px 0;
  input {
    width: 227px;
    height: 45px;
    margin-right: 20px;
    border: 1px solid #979797;
    border-radius: 4px;
  }

  button {
    width: 80px;
    height: 40px;
    border: 1px solid #b3acaa;
    border-radius: 4px;
  }
`;

const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #665e5b;
`;

const ZipCode = () => {
  return (
    <Background image="../../public/Questions.png">
      <Header />
      <Content>
        <Title>Hi there! Before we begin, please enter your zipcode.</Title>
        <Form>
          <label>Zipcode</label>
          <Input>
            <input type="text" id="zipcode" />
            <button>NEXT</button>
          </Input>
        </Form>
        <Link href="">Why do we ask this?</Link>
      </Content>
    </Background>
  );
};

export default ZipCode;
