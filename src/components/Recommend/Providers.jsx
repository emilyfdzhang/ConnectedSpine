import React from 'react';
import {
  faPerson,
  faHospital,
  faUserDoctor,
  faStethoscope,
} from '@fortawesome/free-solid-svg-icons';
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
import { useDbUpdate } from '../../utilities/firebase';
import { getAuth } from 'firebase/auth';

const Providers = ({ resultIndex, data }) => {
  const user = getAuth().currentUser;
  const dateTodayLength = data[user['uid']]['results'].length;
  const dateToday = data[user['uid']]['results'][dateTodayLength - 1];
  const [userUpdate, userResult] = useDbUpdate(`/users/${user['uid']}`);

  const diagnosis = [];
  resultIndex.map((index) => {
    diagnosis.push(ResultDetails[index]);
  });

  const providers = [];
  if (
    diagnosis.includes('Metastatic disease') ||
    diagnosis.includes('Infection') ||
    diagnosis.includes('Cauda Equina') ||
    diagnosis.includes('Myocardial Ischemia')
  ) {
    providers.push('ER/Urgent Care');
  }

  if (diagnosis.includes('Facet Arthropathy')) {
    providers.push('Primary Care Physician');
  }

  if (
    diagnosis.includes('Myelopathy') ||
    diagnosis.includes('Lumbar Stenosis')
  ) {
    providers.push('Neurosurgeon');
  }

  if (diagnosis.includes('Myelopathy')) {
    providers.push('Neurologist');
  }

  if (
    diagnosis.includes('Lumbar Radiculopathy') ||
    diagnosis.includes('Facet Arthropathy')
  ) {
    providers.push('Interventional Pain Physician');
  }

  userUpdate({
    diagnosis: diagnosis,
    providers: providers,
  });

  return (
    <Container>
      <Subtitle>Results</Subtitle>
      <Title>
        Your answers suggest that your symptoms are related to{' '}
        {diagnosis.map((condition, index) => (
          <React.Fragment key={condition}>
            <span>{condition}</span>
            {index !== diagnosis.length - 1 && <span>, </span>}
          </React.Fragment>
        ))}
      </Title>
      <Recomendation>
        <Recomended>Recommended providers</Recomended>
        <Cards>
          {providers.map((provider) => {
            let icon;
            switch (provider) {
              case 'ER/Urgent Care':
                icon = faHospital;
                break;
              case 'Primary Care Physician':
                icon = faPerson;
                break;
              case 'Neurosurgeon':
                icon = faUserDoctor;
                break;
              case 'Neurologist':
                icon = faStethoscope;
                break;
              case 'Interventional Pain Physician':
                icon = faPerson;
                break;
              default:
                icon = faStethoscope;
            }
            return (
              <InfoCard
                icon={icon}
                provider={provider}
                bold={'90% of people'}
                text={` with your answers seek care from ${provider} `}
              />
            );
          })}
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
