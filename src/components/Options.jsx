import 'bootstrap/dist/css/bootstrap.min.css';
import AssessmentContext from '../helpers/Contexts';
import { useContext, useState } from 'react';
import Questions from '../helpers/Questions';
import Select from './QuestionTypes/Select';
import MultiSelect from './QuestionTypes/MultiSelect';
import MultiButton from './QuestionTypes/MultiButton';
import SingleButton from './QuestionTypes/SingleButton';
import { ButtonGroup, Button } from 'react-bootstrap';

const Options = ({ options, currQuestionType, currQuestion }) => {
  const { isValid, setIsValid } = useContext(AssessmentContext);
  const { selectedOptions, setSelectedOptions } = useContext(AssessmentContext);
  const HandleOnclick = (event) => {
    const selected_value = parseInt(event.target.id);
    console.log(event.target.id)


    //const buttonId = event.target.id[0];
    if (selectedOptions.includes(selected_value)) {
      setSelectedOptions(selectedOptions.filter(option => option != selected_value))
    }
    else {
      if (currQuestionType == "Select" || currQuestionType == "Selectbutton") {
        setSelectedOptions([selected_value])

      }
      else {
        setSelectedOptions(selectedOptions.concat(selected_value));
      }
      setIsValid(true);
    }

    //console.log(selectedOptions)
  }
  if (selectedOptions.length === 0 && currQuestion > 2) {
    setIsValid(false)
  }



  if (options) {
    switch (currQuestionType) {
      case 'Select':
        return (
          <Select
            options={options}
            selectedOptions={selectedOptions}
            HandleOnclick={HandleOnclick}
          />
        );
      case 'Multiselect':
        return (
          <MultiSelect
            options={options}
            selectedOptions={selectedOptions}
            HandleOnclick={HandleOnclick}
          />
        );
      case 'Multibutton':
        return (
          <MultiButton
            options={options}
            selectedOptions={selectedOptions}
            HandleOnclick={HandleOnclick}
          />
        );
      case 'Selectbutton':
        return (
          <SingleButton
            options={options}
            selectedOptions={selectedOptions}
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
