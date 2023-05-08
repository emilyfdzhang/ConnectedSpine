import { ButtonGroup, Button } from 'react-bootstrap';
import AssessmentContext from '../../helpers/Contexts';
import { useContext, useState, useEffect } from 'react';
import { SelectButton } from '../../styles';

const SingleButton = ({ options, selectedOptions, HandleOnclick }) => {
  return (
    <div>
      {options.map((option, index) => (
        <SelectButton
          value={index}
          id={index}
          onClick={() => HandleOnclick}
          style={{
            marginBottom: '20px',
            padding: '10px 20px',
            display: 'inline-block',
            backgroundColor: selectedOptions.includes(option)
              ? 'rgba(128, 0, 128, 0.8)'
              : null,
            marginRight: '5px', // add margin-right to create space
          }}
        >
          {option}
        </SelectButton>
      ))}
    </div>
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

export default SingleButton;
