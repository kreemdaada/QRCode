import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BearbeitZahlen = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleAbbrechen = () => {
    console.log('Cancelled');
    setRedirect(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!redirect) {
        // If the button is not clicked, navigate to /bezahlen-erfolgreich
        navigate('/bezahlen-erfolgreich');
      }else{
        navigate('/zahlenform')
      }
    }, 4000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [redirect, navigate]);

  return (
    <div>
      <h2>Bearbeite Zahlen</h2>
      <img src="/images/process.png" alt="Prozess" />
      <p>Additional content...</p>

      <button className="btn btn-primary" onClick={handleAbbrechen}>
        Abbrechen
      </button>
    </div>
  );
};

export default BearbeitZahlen;
