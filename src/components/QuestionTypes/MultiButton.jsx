import styled from 'styled-components';
import { SelectButton } from '../../buttonStyles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.options.length > 3 && `margin-top: -20px;`};
  ${(props) =>
    props.options.length > 5 &&
    `
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    `};

  div {
    margin: 1em 0;
  }
  align-items: center;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  white-space: ${(props) => (props.length ? 'pre-line' : 'nowrap')};
`;

const MultiButton = ({ options, HandleOnclick, selectedOptions }) => {
  return (
    <Container role="group" aria-label="Button group" options={options}>
      {options.map((option, index) => (
        <div>
          <SelectButton
            value={option}
            key={`button-${index}`}
            id={index}
            onClick={HandleOnclick}
            selected={selectedOptions.includes(option)}
            height={'auto'}
          >
            <Text length={option.length > 16}>{option}</Text>
          </SelectButton>
        </div>
      ))}
    </Container>
  );
};

export default MultiButton;
