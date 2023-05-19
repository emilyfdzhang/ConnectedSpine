import React from 'react';

const ProgressDots = ({ currentStep }) => {
  const dots = ['.', '.', '.'];

  const renderDots = () => {
    return dots.map((dot, index) => (
      <span
        key={index}
        style={{
          margin: '0 0.1 px',
          fontSize: '100px',
          color: index === currentStep ? 'blue' : 'gray',
        }}
      >
        {dot}
      </span>
    ));
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '10px',
        left: '30px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {renderDots()}
    </div>
  );
};

export default ProgressDots;
