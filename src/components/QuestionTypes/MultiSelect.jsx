import { ButtonGroup, Button } from 'react-bootstrap';
import AssessmentContext from '../../helpers/Contexts';
import { useContext, useState, useEffect } from 'react';

const MultiSelect = ({ options, selectedButton, HandleOnclick }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { isValid, setIsValid } = useContext(AssessmentContext);

  const handleChange = (event) => {
    const { value } = event.target;
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  useEffect(() => {
    if (selectedItems.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [selectedItems]);

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
            value={option}
            checked={selectedItems.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default MultiSelect;
