import { SelectButton } from '../../styles';

const SingleButton = ({ options, selectedOptions, HandleOnclick }) => {
  return (
    <div>
      {options.map((option, index) => (
        <SelectButton
          key={`button-${index}`}
          value={option}
          id={index}
          onClick={HandleOnclick}
          selected={selectedOptions.includes(option)}
        >
          {option}
        </SelectButton>
      ))}
    </div>
  );
};

export default SingleButton;
