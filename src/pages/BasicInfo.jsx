import { BackButton, Background, Content, NextButton } from '../styles';
import Header from '../components/Header';

const BasicInfo = () => {
  return (
    <Background image="../../public/Pages.jpg">
      <Header />
      <Content>
        <div>
          <h3>Section 1</h3>
          <h2>Basic Info</h2>
          <h1>Terms of Service</h1>
        </div>
        <div>
          Before answering our questionnaire, please read the Terms of Service.
          Remember that: The results of this assessmenet are not a diagnosis.
          The assessment is for informational purposes and is not a qualified
          medical opinion. Do not use in emergencies. In case of health
          emergency, call your local emergency number immediately. Your data is
          safe. Information that you provide is anonymous and not shared with
          anyone.
          <p>I have read and accept the Terms of Service and Privacy Policy.</p>
        </div>
        <div>
          <BackButton>Back</BackButton>
          <NextButton>Next</NextButton>
        </div>
      </Content>
    </Background>
  );
};
export default BasicInfo;
