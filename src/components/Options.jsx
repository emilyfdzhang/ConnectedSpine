import 'bootstrap/dist/css/bootstrap.min.css';
import AssessmentContext from '../helpers/Contexts';
import { useContext, useState } from 'react';
import Questions from '../helpers/Questions';
import Select from './QuestionTypes/Select';
import MultiSelect from './QuestionTypes/MultiSelect';
import MultiButton from './QuestionTypes/MultiButton';
import SelectButton from './QuestionTypes/SelectButton';
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
          <Select
            options={options}
            selectedButton={selectedButton}
            HandleOnclick={HandleOnclick}
          />
        );
      case 'Multiselect':
        return (
          <MultiSelect
            options={options}
            selectedButton={selectedButton}
            HandleOnclick={HandleOnclick}
          />
        );
      case 'Multibutton':
        return (
          <MultiButton
            options={options}
            selectedButton={selectedButton}
            HandleOnclick={HandleOnclick}
          />
        );
      case 'Selectbutton':
        return (
          <SelectButton
            options={options}
            selectedButton={selectedButton}
            HandleOnclick={HandleOnclick}
          />
        );
      default:
        return <></>;
    }
  } else {
    return <></>;
  }
};

export default Options;
