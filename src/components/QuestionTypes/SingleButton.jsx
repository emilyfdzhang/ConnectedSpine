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
};

export default SingleButton;
