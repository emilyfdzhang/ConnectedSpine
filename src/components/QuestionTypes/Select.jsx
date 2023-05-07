import { ButtonGroup, Button } from 'react-bootstrap';
import AssessmentContext from '../../helpers/Contexts';
import { useContext, useState, useEffect } from 'react';

const Select = ({ options, selectedButton, HandleOnclick }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const { isValid, setIsValid } = useContext(AssessmentContext);

  const handleOptionSelect = (option) => {
    if (selectedOption === option) {
      setSelectedOption('');
    } else {
      setSelectedOption(option);
    }
  };

  useEffect(() => {
    if (selectedOption) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [selectedOption]);

  return (
    <div>
      {options.map((option) => (
        <div
          key={option}
          onClick={() => handleOptionSelect(option)}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 10,
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              border: '2px solid black',
              marginRight: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                selectedOption === option ? 'purple' : 'transparent',
            }}
          >
            {selectedOption === option && (
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: 'black',
                }}
              />
            )}
          </div>
          <div>{option}</div>
        </div>
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

export default Select;
