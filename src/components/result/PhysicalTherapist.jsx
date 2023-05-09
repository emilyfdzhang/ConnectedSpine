import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`;

const PhysicalTherapist = () => {
  return (
    <div className="container">
      <h2 style={{ 'font-weight': 'lighter' }}>Results</h2> <br />
      <h1>
        Your answers suggests that your symptoms are related to a muscle strain
      </h1>{' '}
      <br />
      <h3 style={{ 'font-weight': 'lighter' }}>Recommended providers</h3>
      <Container>
        <div class="card" style={{ 'margin-right': '15px', width: '45%' }}>
          <div class="card-body">
            <div style={{ height: '70%' }}>
              <h5 class="card-title">Physical Therapist</h5>
              <p class="card-text">
                90% of people with your answers seek care from a physical
                therapist
              </p>
            </div>
            <a href="#" class="btn btn-primary">
              More Info
            </a>
          </div>
        </div>
        <div class="card" style={{ 'margin-right': '15px', width: '45%' }}>
          <div class="card-body">
            <div style={{ height: '70%' }}>
              <h5 class="card-title">Physiatrist (MD)</h5>
              <p class="card-text">
                35% of people with your answers seek care from a Physiatrist
              </p>
            </div>
            <a href="#" class="btn btn-primary">
              More Info
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PhysicalTherapist;
