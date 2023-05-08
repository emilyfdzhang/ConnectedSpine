import { useState, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import Modal from '../Modal';
import styled from 'styled-components';

const Remember = styled.p`
  padding: 25px 0;
  line-height: 1.1em;

  span {
    margin: 0;
    padding: 0;
  }
`;

const Checkbox = styled.span`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    margin-right: 10px;
  }
`;

const Link = styled.a`
  text-decoration-line: underline;
  cursor: pointer;
  color: black;
`;

const terms = 'this is the terms of service';

const privacy = 'this is the privacy';

const TermsAgreement = () => {
  const { isValid, setIsValid } = useContext(AssessmentContext);
  const [agreement, setAgreement] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  function handleCheckboxClick() {
    setIsValid(!isValid);
    setAgreement(true);
  }

  const handleTermsClick = (event) => {
    event.preventDefault();
    setShowTerms(true);
  };

  const handlePrivacyClick = (event) => {
    event.preventDefault();
    setShowPrivacy(true);
  };

  return (
    <div>
      <p>
        Before answering our questionnaire, please read the Terms of Service.
      </p>
      <Remember>
        <span>Remember that: </span>
        <br /> <br />
        <span>
          The results of this assessmenet are not a diagnosis. The assessment is
          for informational purposes and is not a qualified medical opinion.
        </span>
        <br /> <br />
        <span>
          Do not use in emergencies. In case of health emergency, call your
          local emergency number immediately. <br /> <br />
          Your data is safe. Information that you provide is anonymous and not
          shared with anyone.
        </span>
        <br /> <br />
      </Remember>
      <Checkbox>
        <label>
          <input
            type="checkbox"
            checked={isValid}
            onChange={handleCheckboxClick}
          />
        </label>
        <span>
          I have read and accept the{' '}
          <Link onClick={handleTermsClick}>Terms of Service</Link>
          <Modal
            showModal={showTerms}
            setShowModal={setShowTerms}
            text={terms}
          />
          {' and '}
          <Link onClick={handlePrivacyClick}>Privacy Policy</Link>
          <Modal
            showModal={showPrivacy}
            setShowModal={setShowPrivacy}
            text={privacy}
          />
          .
        </span>
      </Checkbox>
      <br />
    </div>
  );
};
export default TermsAgreement;
