// LoadingSpinner.js
import React from 'react';

const LoadingSpinner = ({ size = '18px' }) => {
  return (
    <div className="spinner-border text-light" role="status" style={{ width: size, height: size, marginRight: '8px' }}>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
