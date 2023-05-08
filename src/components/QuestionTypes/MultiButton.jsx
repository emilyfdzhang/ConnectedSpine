import { ButtonGroup, Button } from 'react-bootstrap';
import AssessmentContext from '../../helpers/Contexts';
import { useContext, useState, useEffect } from 'react';
import { SelectButton } from '../../styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const MultiButton = ({ options, HandleOnclick, selectedOptions }) => {
  console.log(selectedOptions)
  return (
    <div
      className="btn-group-vertical d-flex justify-content-center"
      role="group"
      aria-label="Button group">
      {options.map((option, index) => (

        <SelectButton
          value={index}
          key={index}
          id={index}
          onClick={() => HandleOnclick}
          style={{
            marginBottom: '20px',
            backgroundColor: selectedOptions.includes(index)
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
