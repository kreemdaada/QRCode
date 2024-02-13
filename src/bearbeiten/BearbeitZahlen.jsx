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
    const timeoutId = setTimeout(() => {
      setRedirect(true);
    },8000); 

    if (!redirect) {
      // If the button is not clicked, navigate to /bezahlen-erfolgreich
      navigate('/bezahlen-erfolgreich');
    }else{
      navigate('/zahlenform')
    }
  }, [redirect, navigate]);
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
      <div>
        <h2 className="text-center">Bearbeite Zahlen</h2>
        <img src="/images/process.png" alt="Prozess" className="mx-auto d-block" />
        <p className="text-center">Additional content...</p>
      </div>

      {/* Button to navigate back to the scanned product list */}
      <button style={{ margin: 'auto' }} className="btn btn-primary" onClick={handleAbbrechen}>
        Abbrechen
      </button>
    </div>
  );
};
export default BearbeitZahlen;
