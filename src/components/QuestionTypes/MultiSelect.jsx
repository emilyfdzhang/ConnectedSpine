
const MultiSelect = ({ options, selectedOptions, HandleOnclick }) => {

  return (
    <div
      className="btn-group-vertical d-flex justify-content-center"
      role="group"
      aria-label="Button group"
    >
      {options.map((option, index) => (
        <label style={{ display: 'block' }}>
          <input
            key={index}
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
