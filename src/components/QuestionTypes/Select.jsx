import styled from 'styled-components';
import { underline } from '../../styles';
import { validBlue } from '../../buttonStyles';

const Container = styled.div`
  width: 80%;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${underline};
  cursor: pointer;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  border: 2px solid black;
  ${(props) =>
    props.selected &&
    `
      border: 2px solid ${validBlue};
    `}
`;

const Selected = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${validBlue};
`;

const Select = ({ options, selectedOptions, HandleOnclick }) => {
  return (
    <Container>
      {options.map((option, index) => (
        <Option key={`select-${index}`} value={option} onClick={HandleOnclick}>
          <Circle
            id={index}
            selected={selectedOptions.includes(option)}
            value={option}
          >
            {selectedOptions.includes(option) && <Selected />}
          </Circle>
          <div>{option}</div>
        </Option>
      ))}{' '}
    </Container>
  );
};

export default Select;
