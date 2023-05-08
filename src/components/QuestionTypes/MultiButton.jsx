import { ButtonGroup, Button } from 'react-bootstrap';
import AssessmentContext from '../../helpers/Contexts';
import { useContext, useState, useEffect } from 'react';
import { SelectButton } from '../../styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const MultiButton = ({ options, selectedButton, HandleOnclick }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { isValid, setIsValid } = useContext(AssessmentContext);

  const handleOptionClick = (option) => {
    const index = selectedOptions.indexOf(option);
    if (index > -1) {
      // remove option if already selected
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // add option if not already selected
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  useEffect(() => {
    if (selectedOptions.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [selectedOptions]);

  return (
    <div
      className="btn-group-vertical d-flex justify-content-center"
      role="group"
      aria-label="Button group">
      {options.map((option) => (

        <SelectButton
          key={option}
          onClick={() => handleOptionClick(option)}
          style={{
            marginBottom: '20px',
            backgroundColor: selectedOptions.includes(option)
              ? 'rgba(128, 0, 128, 0.8)'
              : null,
          }}>

          {option}
        </SelectButton>


      ))
      }
      {/* <p>Selected options: {selectedOptions.join(', ')}</p> */}
    </div >
  );

  // return (
  //   <ButtonGroup
  //     className="btn-group-vertical d-flex justify-content-center"
  //     role="group"
  //     aria-label="Button group"
  //   >
  //     {options.map((option, index) => (
  //       <Button
  //         key={index}
  //         id={index}
  //         value={option}
  //         type="button"
  //         className={selectedButton === index ? 'active' : 'btn-light'}
  //         onClick={HandleOnclick}
  //       >
  //         {option}
  //       </Button>
  //     ))}
  //   </ButtonGroup>
  // );
};

export default MultiButton;
