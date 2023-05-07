import { ButtonGroup, Button } from 'react-bootstrap';

const MultiSelect = ({ options, selectedButton, HandleOnclick }) => {
  return (
    <ButtonGroup
      className="btn-group-vertical d-flex justify-content-center"
      role="group"
      aria-label="Button group"
    >
      {options.map((option, index) => (
        <Button
          key={index}
          id={index}
          value={option}
          type="button"
          className={selectedButton === index ? 'active' : 'btn-light'}
          onClick={HandleOnclick}
        >
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default MultiSelect;
