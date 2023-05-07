import 'bootstrap/dist/css/bootstrap.min.css';
import AssessmentContext from '../helpers/Contexts';
import { useContext, useState } from 'react';
import Questions from '../helpers/Questions';
import { ButtonGroup, Button } from 'react-bootstrap';

const Options = ({ options, currQuestionType }) => {
  const { isValid, setIsValid } = useContext(AssessmentContext);
  const { selectedButton, setSelectedButton } = useContext(AssessmentContext);
  const HandleOnclick = (event) => {
    const selected_value = event.target.value;
    const buttonId = event.target.id;
    setSelectedButton(parseInt(buttonId));

    if (!isValid) {
      setIsValid(true);
      console.log('Select Value:', selected_value);
    }
  };
  if (options) {
    switch (currQuestionType) {
      case 'Select':
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
      case 'Multiselect':
        return <h1>Multiselect</h1>;
      case 'Multibutton':
        return <h1>Multibutton</h1>;
      case 'Selectbutton':
        return <h1>Selectbutton</h1>;
      default:
        return <></>;
    }
  } else {
    return <></>;
  }
};

export default Options;
