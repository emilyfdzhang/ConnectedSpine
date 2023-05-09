import styled from 'styled-components';
import { SelectButton } from '../../styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.options.length > 3 && `margin-top: -50px;`};

  div {
    margin: 1em 0;
  }
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  white-space: nowrap;
`;

const MultiButton = ({ options, HandleOnclick, selectedOptions }) => {
  return (
    <Container role="group" aria-label="Button group" options={options}>
      {options.map((option, index) => (
        <div>
          <SelectButton
            value={index}
            key={`button-${index}`}
            id={index}
            onClick={HandleOnclick}
            selected={selectedOptions.includes(index)}
            height={'auto'}
          >
            <Text>{option}</Text>
          </SelectButton>
        </div>
      ))}
    </Container>
  );
};

export default MultiButton;
