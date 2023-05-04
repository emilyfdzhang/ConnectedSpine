import './Home.css';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="homepage">
      {/* <button className="menue">
        <i className="fa fa-bars"></i>
        <span>ConnectedSpine</span>
      </button> */}
      <Header />
      <div className="title-text">
        <h1>We connect you to the care you need.</h1>
        <p className="subtitle">
          ConnectedSpine uses the knowledge of spine care specialists to guide
          you to the right providers.
        </p>
      </div>
      <div className="instructions">
        <p>Experiencing pain or discomfort in your back or neck?</p>
        <p className="bold">
          <strong>Take our 5 min assessment.</strong>
        </p>
        <button className="assessment">Start Assessment</button>
      </div>
    </div>
  );
};

export default Home;
