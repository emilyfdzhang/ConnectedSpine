import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Modal from '../Modal';
import { Bold, cardBackground, cardBoxShadow, iconPurple } from '../../styles';
import {
  boxShadow,
  backGreyLight,
  borderBlue,
  validBlue,
} from '../../buttonStyles';

const Card = styled.div`
  display: flex;
  width: 352px;
  height: 232px;
  background: ${cardBackground};
  box-shadow: ${cardBoxShadow};
  border-radius: 10px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  font-size: 40px;
  margin-top: 10%;
  color: ${iconPurple};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 10%;
  background-color: ${backGreyLight};
  max-height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const More = styled.a`
  margin-left: -30%;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;

  color: ${borderBlue};
  margin-top: 3px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Provider = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.18px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.87);
`;

const Text = styled.p`
  font-size: 13px;
  margin-left: 10%;
  margin-bottom: 0;
  margin-right: 10%;
`;

const Button = styled.button`
  background: ${validBlue};
  box-shadow: ${boxShadow};
  border: none;
  border-radius: 4px;
  width: 80%;
  height: 20%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: white;
`;

const InfoCard = ({ icon, provider, bold, text }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Card>
      <Logo>
        <FontAwesomeIcon icon={icon} />
      </Logo>
      <Content>
        <Provider>{provider}</Provider>
        <Text>
          <Bold>{bold}</Bold>
          {text}
        </Text>
        <More onClick={() => setShowModal(true)}>+ More details</More>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          text={'hey'}
        ></Modal>
        <Button>Search Providers</Button>
      </Content>
    </Card>
  );
};

export default InfoCard;
