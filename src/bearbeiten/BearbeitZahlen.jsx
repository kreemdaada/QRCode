import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BearbeitZahlen = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleAbbrechen = () => {
    console.log('Cancellation logic here');
    navigate('/ZahlenForm');
    console.log('Cancelled');
    setRedirect(true);
  };

  useEffect(() => {
    // Set a timeout for 8 seconds
    const timeoutId = setTimeout(() => {
      setRedirect(true);
    }, 8000);

    // If redirect is false, navigate to /bezahlen-erfolgreich after 8 seconds
    if (!redirect) {
      navigate('/bezahlen-erfolgreich');
    }

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, [redirect, navigate]);

  useEffect(() => {
    // Navigate to /bezahlen-erfolgreich if redirect is true
    if (redirect) {
      setTimeout(() => {
        navigate('/bezahlen-erfolgreich');
      }, 4000); // Navigate to success page after an additional 4 seconds
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
      <button style={{ margin: 'auto' }} className="btn btn-primary" onClick={handleAbbrechen}>
        Abbrechen
      </button>
    </div>
  );
};

export default BearbeitZahlen;
