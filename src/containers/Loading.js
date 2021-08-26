import React from 'react';

const Loading = () => (
  <div>
    <div className="d-flex justify-content-center">
      <h2 data-test-id='loading'>Loading...</h2>
      <br />
      <div className="spinner-border text-primary" role="status" />
    </div>
  </div>
);

export default Loading;
