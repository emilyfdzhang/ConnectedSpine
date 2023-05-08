import { ButtonGroup, Button } from 'react-bootstrap';
import AssessmentContext from '../../helpers/Contexts';
import { useContext, useState, useEffect } from 'react';

const MultiSelect = ({ options, selectedOptions, HandleOnclick }) => {
  console.log(selectedOptions.includes(0))
  console.log(selectedOptions)

  return (
    <div
      className="btn-group-vertical d-flex justify-content-center"
      role="group"
      aria-label="Button group"
    >
      {options.map((option, index) => (
        <label style={{ display: 'block' }}>
          <input
            type="checkbox"
            id={index}
            value={index}
            checked={selectedOptions.includes(index)}
            onClick={HandleOnclick}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default MultiSelect;
