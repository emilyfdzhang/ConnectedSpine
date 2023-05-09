import { SelectButton } from '../../styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const MultiButton = ({ options, HandleOnclick, selectedOptions }) => {
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
          onClick={HandleOnclick}
          style={{
            marginBottom: '20px',
            backgroundColor:
              selectedOptions.includes(index)

                ? 'rgba(128, 0, 128, 0.8)'
                : null,
          }
          } >
          {option}
        </SelectButton>
      ))
      }

    </div >
  );
};

export default MultiButton;
