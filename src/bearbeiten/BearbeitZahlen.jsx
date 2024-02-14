import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BearbeitZahlen = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout for 8 seconds
    const timeoutId = setTimeout(() => {
      setRedirect(true);
    }, 8000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Navigate to /ZahlenForm if redirect is true
    if (redirect) {
      console.log('Cancelled');
      navigate('/ZahlenForm');
    }
  }, [redirect, navigate]);

  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
      <div>
        <h2 className="text-center">Bearbeite Zahlen</h2>
        <img src="/images/process.png" alt="Prozess" className="mx-auto d-block" />
        <p className="text-center">Additional content...</p>
      </div>

      {/* Button to navigate back to the ZahlenForm page */}
      <button style={{ margin: 'auto' }} className="btn btn-primary" onClick={() => setRedirect(true)}>
        Abbrechen
      </button>
    </div>
  );
};

export default BearbeitZahlen;
