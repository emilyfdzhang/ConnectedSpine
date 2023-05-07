import 'bootstrap/dist/css/bootstrap.min.css';
import AssessmentContext from '../helpers/Contexts';
import { useContext } from 'react';

const Options = ({ options }) => {
    const { isValid, setIsValid } = useContext(AssessmentContext)
    if (options) {
        return (
            <div className="btn-group-vertical d-flex justify-content-center" role="group" aria-label="Button group">
                {
                    options.map(option => (
                        <button type="button" className="btn btn-light mx-2" onClick={() => setIsValid(true)}> {option}</button>))
                }
            </div >
        )
    }
    else {
        return (<></>)
    }
}

export default Options; 