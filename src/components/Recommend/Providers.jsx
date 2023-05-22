import React from 'react';
import { faPerson, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import InfoCard from './InfoCard';
import { BackButton } from '../../buttonStyles';
import { ResultDetails } from '../../helpers/RecommendedDetails';
import {
  Container,
  Subtitle,
  Title,
  Recomendation,
  Recomended,
  Cards,
  Save,
} from './styles';

const Providers = ({ resultIndex }) => {
  const diagnosis = [];
  resultIndex.map((index) => {
    diagnosis.push(ResultDetails[index]);
  });
  console.log('PROVIDER DIAGNOSIS', diagnosis);

  return (
    <Container>
      <Subtitle>Results</Subtitle>
      <Title>
        Your answers suggests that your symptoms are related to{' '}
        {diagnosis.map((condition) => (
          <p>{condition}, </p>
        ))}
      </Title>
      <Recomendation>
        <Recomended>Recommended providers</Recomended>
        <Cards>
          {diagnosis.includes('Metastatic disease') ||
          diagnosis.includes('Infection') ||
          diagnosis.includes('Cauda Equina') ||
          diagnosis.includes('Myocardial Ischemia') ? (
            <InfoCard
              icon={faPerson}
              provider={'ER/Urgent Care'}
              bold={'90% of people'}
              text={' with your answers seek care from the ER or urgent care'}
            />
          ) : null}
          {diagnosis.includes('Facet Arthropathy') ? (
            <InfoCard
              icon={faPerson}
              provider={'Primary Care Physician'}
              bold={'90% of people'}
              text={
                ' with your answers seek care from a primary care physician'
              }
            />
          ) : null}
          {diagnosis.includes('Myelopathy') ||
          diagnosis.includes('Lumbar Stenosis') ? (
            <InfoCard
              icon={faPerson}
              provider={'Neurosurgeon'}
              bold={'90% of people'}
              text={' with your answers seek care from a neurosurgeon'}
            />
          ) : null}
          {diagnosis.includes('Myelopathy') ? (
            <InfoCard
              icon={faPerson}
              provider={'Neurologist'}
              bold={'90% of people'}
              text={' with your answers seek care from a neurologist'}
            />
          ) : null}
          {diagnosis.includes('Lumbar Radiculopathy') ||
          diagnosis.includes('Facet Arthropathy') ? (
            <InfoCard
              icon={faPerson}
              provider={'Interventional Pain Physician'}
              bold={'90% of people'}
              text={
                ' with your answers seek care from an interventional pain physician'
              }
            />
          ) : null}
          {/* <InfoCard
            icon={faPerson}
            provider={'Physical Therapist'}
            bold={'90% of people'}
            text={' with your answers seek care from a physical therapist'}
          />
          <InfoCard
            icon={faStethoscope}
            provider={'Physiatrist (MD)'}
            bold={'35% of people'}
            text={' with your answers seek care from a Physiatrist'}
          /> */}
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

export default Providers;
