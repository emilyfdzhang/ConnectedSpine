import 'bootstrap/dist/css/bootstrap.min.css';
import AssessmentContext from '../helpers/Contexts';
import { useContext, useState } from 'react';
import Questions from '../helpers/Questions';
import { ButtonGroup, Button } from 'react-bootstrap';

const Options = ({ currQuestion, options }) => {
    const { isValid, setIsValid } = useContext(AssessmentContext)
    const [jsonObj, setJsonObj] = useState(Questions[currQuestion])
    const { selectedButton, setSelectedButton } = useContext(AssessmentContext);
    const HandleOnclick = (event) => {
        const selected_value = event.target.value;
        const buttonId = event.target.id;
        setSelectedButton(parseInt(buttonId));


        if (!isValid) {
            setIsValid(true);
            console.log("Select Value:", selected_value)


        }
    }
    if (options) {
        return (
            <ButtonGroup className="btn-group-vertical d-flex justify-content-center" role="group" aria-label="Button group">
                {options.map((option, index) => (
                    <Button
                        id={index}
                        value={option}
                        type="button"
                        className={selectedButton === index ? "active" : "btn-light"}
                        onClick={HandleOnclick}
                    >
                        {option}
                    </Button>
                ))}
            </ButtonGroup>
        );
    }

    else {
        return (<></>)
    }
}

export default Options; 
