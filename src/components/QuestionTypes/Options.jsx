import { useState, useEffect, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import Select from './Select';
import MultiSelect from './MultiSelect';
import SingleButton from './SingleButton';
import MultiButton from './MultiButton';
import Questions from '../../helpers/Questions';

const Options = ({
  currQuestion,
  currSubQuestion,
  subQuestion,
  options,
  currQuestionType,
}) => {
  const { isValid, setIsValid } = useContext(AssessmentContext);
  const { selectedOptions, setSelectedOptions } = useContext(AssessmentContext);
  const { answers, setAnswers } = useContext(AssessmentContext);

  const HandleOnclick = (event) => {
    const selected_value = event.currentTarget.getAttribute('value');

    if (selectedOptions.includes(selected_value)) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== selected_value)
      );
    } else {
      if (currQuestionType == 'Select' || currQuestionType == 'Selectbutton') {
        setSelectedOptions([selected_value]);
      } else {
        setSelectedOptions(selectedOptions.concat(selected_value));
      }
      setIsValid(true);
    }
  };

  if (selectedOptions.length === 0 && currQuestion > 2) {
    setIsValid(false);
  }

  useEffect(() => {
    // Previous answers are saved when clicking the back button
    if (Questions[currQuestion].sub_questions) {
      var qid = `${Questions[currQuestion].qId}-subq-${currSubQuestion}`;
    }
    if (
      currQuestion > 2 &&
      (answers[Questions[currQuestion].qId] || answers[qid])
    ) {
      let previousAnswer;

      if (Questions[currQuestion].sub_questions) {
        previousAnswer = answers[qid];
      } else {
        previousAnswer = answers[Questions[currQuestion].qId];
      }
      setSelectedOptions(selectedOptions.concat(previousAnswer));
      // still able to click next
      setIsValid(true);
    }
  }, [currQuestion, currSubQuestion]);

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
