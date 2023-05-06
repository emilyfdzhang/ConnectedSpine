
import './TermsAgreement.css';
import { useState } from 'react';


const TermsAgreement = () => {
    const [isValid, setIsValid] = useState(false);

    function handleCheckboxClick() {
        setIsValid(!isValid);
    }

    return (
        <div><p>
            Before answering our questionnaire, please read the{' '}
            <b>Terms of Service.</b>
        </p>
            <br /> <br />
            <p>
                Remember that: <br /> <br />
                The results of this assessmenet are not a diagnosis. The
                assessment is for informational purposes and is not a qualified
                medical opinion. <br /> <br />
                Do not use in emergencies. In case of health emergency, call your
                local emergency number immediately. <br /> <br />
                Your data is safe. Information that you provide is anonymous and
                not shared with anyone. <br /> <br />
            </p>
            <label>
                <input
                    type="checkbox"
                    checked={isValid}
                    onClick={handleCheckboxClick}
                />
                <span>
                    I have read and accept the{' '}
                    <b>
                        <u>Terms of Service</u>
                    </b>{' '}
                    and{' '}
                    <b>
                        <u>Privacy Policy</u>
                    </b>
                    .
                </span>
            </label>
            <br />
        </div>
    );
};
export default TermsAgreement;
