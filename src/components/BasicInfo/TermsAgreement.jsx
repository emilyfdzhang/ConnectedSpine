import { useState, useContext } from 'react';
import AssessmentContext from '../../helpers/Contexts';
import Modal from '../Modal';
import { Terms, Privacy } from '../../helpers/Explanations';
import styled from 'styled-components';
import { Bold } from '../../styles';

const Container = styled.div`
  padding: 0 30px;
`;

const Remember = styled.div`
  padding: 25px 0;
  line-height: 1.1em;

  p {
    margin-bottom: 20px;
  }
`;

const Checkbox = styled.span`
  display: flex;
  align-items: center;

  input[type='checkbox'] {
    margin-right: 10px;
    transform: scale(1.5);
  }
`;

const Link = styled.a`
  text-decoration-line: underline;
  cursor: pointer;
  color: black;
`;

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
    <Container>
      <p>
        Before answering our questionnaire, please read the{' '}
        <Bold>Terms of Service</Bold>.
      </p>
      <Remember>
        <p>Remember that: </p>
        <p>
          The results of this assessmenet are not a diagnosis. The assessment is
          for informational purposes and is not a qualified medical opinion.
        </p>
        <p>
          Do not use in emergencies. In case of health emergency, call your
          local emergency number immediately.
        </p>
        <p>
          Your data is safe. Information that you provide is anonymous and not
          shared with anyone.
        </p>
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
          <Link onClick={handleTermsClick}>
            <Bold>Terms of Service</Bold>
          </Link>
          <Modal
            showModal={showTerms}
            setShowModal={setShowTerms}
            text={Terms}
          />
          {' and '}
          <Link onClick={handlePrivacyClick}>
            <Bold>Privacy Policy</Bold>
          </Link>
          <Modal
            showModal={showPrivacy}
            setShowModal={setShowPrivacy}
            text={Privacy}
          />
          .
        </span>
      </Checkbox>
      <br />
    </Container>
  );
};
export default TermsAgreement;
