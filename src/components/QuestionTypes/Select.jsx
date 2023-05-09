import styled from 'styled-components';

const Select = ({ options, selectedOptions, HandleOnclick }) => {
  return (
    <div>
      {options.map((option, index) => (
        <div
          key={index}
          value={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 10,
            cursor: 'pointer',
          }}
        >
          <div
            id={index}
            onClick={HandleOnclick}
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              border: '2px solid black',
              marginRight: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: selectedOptions.includes(index)
                ? 'purple'
                : 'transparent',
            }}
          >
            {selectedOptions.includes(index) && (
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
      ))}{' '}
    </div>
  );
};

export default Select;
