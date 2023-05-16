import { Bold, BackButton } from '../../styles';
import {
  Container,
  Subtitle,
  Title,
  Recomendation,
  Recomended,
  Cards,
  Card,
  Logo,
  Content,
  Text,
  Provider,
  Button,
  Save,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect, useContext } from 'react';

const PhysicalTherapist = () => {
  return (
    <Container>
      <Subtitle>Results</Subtitle>
      <Title>
        Your answers suggests that your symptoms are related to a muscle strain.
      </Title>
      <Recomendation>
        <Recomended>Recommended providers</Recomended>
        <Cards>
          <Card>
            <Logo>
              <FontAwesomeIcon icon={faPerson} />
            </Logo>
            <Content>
              <Provider>Physical Therapist</Provider>
              <Text>
                <Bold>90% of people</Bold> with your answers seek care from a
                physical therapist
              </Text>
              <a>+ More details</a>
              <Button>Search Providers</Button>
            </Content>
          </Card>

          <Card>
            <Logo>
              <FontAwesomeIcon icon={faStethoscope} />
            </Logo>
            <Content>
              <Provider>Physiatrist (MD)</Provider>
              <Text>
                <Bold>35% of people</Bold> with your answers seek care from a
                Physiatrist
              </Text>
              <a>+ More details</a>
              <Button>Search Providers</Button>
            </Content>
          </Card>
        </Cards>
      </Recomendation>
      <Save>
        <p>Save your answers to reference with your provider.</p>
        <BackButton>Download</BackButton>
        <BackButton>Email</BackButton>
        <BackButton>Text</BackButton>
      </Save>
    </Container>
  );
};

export default PhysicalTherapist;
