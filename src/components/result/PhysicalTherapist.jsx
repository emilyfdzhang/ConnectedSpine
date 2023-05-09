import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`;

const PhysicalTherapist = () => {
    return (
        <div className="container">
            <h2>Results</h2>
            <h1>Your answers suggests that your symptoms are related to a muscle strain</h1>
            <h3>Recommended providers</h3>
            <Container>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Physical Therapist</h5>
                        <p class="card-text">90% of people with your answers seek care from a physical therapist</p>
                        <a href="#" class="btn btn-primary">More Info</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Physical Therapist</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">More Info</a>
                    </div>
                </div>
            </Container>
        </div>

    )
};

export default PhysicalTherapist;