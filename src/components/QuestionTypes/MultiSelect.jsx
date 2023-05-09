import styled from 'styled-components';
import { underline } from '../../styles';

const Container = styled.div`
  width: 80%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${underline};

  input[type='checkbox'] {
    transform: scale(1.5);
  }
`;

const Text = styled.div`
  margin-left: 15px;
`;

const MultiSelect = ({ options, selectedOptions, HandleOnclick }) => {
  return (
    <Container role="group" aria-label="Button group">
      {options.map((option, index) => (
        <Label key={`select-${index}`}>
          <input
            type="checkbox"
            id={index}
            value={index}
            checked={selectedOptions.includes(index)}
            onChange={HandleOnclick}
          />
          <Text>{option}</Text>
        </Label>
      ))}
    </Container>
  );
};

export default MultiSelect;
