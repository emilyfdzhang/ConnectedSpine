import React, { useState } from 'react';
import { useDbUpdate } from '../../utilities/firebase';

const FeedbackForm = ({ user }) => {
  const [feedback, setFeedback] = useState({
    question1: '',
    question2: '',
    question3: 0,
    question4: '',
    question5: 0,
  });
  const [submitted, setSubmitted] = useState(false);
  const [userUpdate, userResult] = useDbUpdate(`/users/${user['uid']}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    userUpdate({
      feedback: feedback
    });

    // Perform any validation or data processing here
    // For simplicity, we'll just log the feedback to the console
    setSubmitted(true);
  };

  const handleReset = () => {
    setFeedback({
      question1: '',
      question2: '',
      question3: 0,
      question4: '',
      question5: 0,
    });
    setSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const updatedValue = type === 'number' ? parseInt(value) : value;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: updatedValue,
    }));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      {submitted ? (
        <div>
          <h2>Thank you for your feedback!</h2>
          <p>We appreciate your input.</p>
          <button
            style={{ display: 'block', margin: '0 auto' }}
            onClick={handleReset}
          >
            Submit Another Feedback
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Feedback Form</h2>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Did you use the advice of the app? Please answer yes or no.
            <select
              name="question1"
              value={feedback.question1}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            What provider did you see?
            <select
              name="question2"
              value={feedback.question2}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="Primary care physician">
                Primary care physician
              </option>
              <option value="Neurosurgeon">Neurosurgeon</option>
              <option value="ER/Urgent Care">ER/Urgent Care</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Interventional pain physician">
                Interventional pain physician
              </option>
            </select>
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            How useful was this provider on a scale from 0-10?
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>0</span>
              <input
                type="range"
                name="question3"
                min="0"
                max="10"
                value={feedback.question3}
                onChange={handleChange}
                required
              />
              <span style={{ marginLeft: '10px' }}>10</span>
            </div>
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Would you recommend this app to a colleague? Please answer yes or
            no.
            <select
              name="question4"
              value={feedback.question4}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            How much relief have you gotten on a scale from 0 - 100%?
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>0%</span>
              <input
                type="range"
                name="question5"
                min="0"
                max="100"
                value={feedback.question5}
                onChange={handleChange}
                required
              />
              <span style={{ marginLeft: '10px' }}>100%</span>
            </div>
          </label>
          <button style={{ display: 'block', margin: '0 auto' }} type="submit">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
