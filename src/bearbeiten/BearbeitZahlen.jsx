import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======

>>>>>>> 04c6c762d26c280eacd82c67c4af008beb901ee6
const BearbeitZahlen = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleAbbrechen = () => {
<<<<<<< HEAD
    console.log('Cancellation logic here');
    navigate('/ZahlenForm');
=======
    console.log('Cancelled');
    setRedirect(true);
>>>>>>> 04c6c762d26c280eacd82c67c4af008beb901ee6
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
<<<<<<< HEAD
      setRedirect(true);
    },8000); 
=======
      if (!redirect) {
        // If the button is not clicked, navigate to /bezahlen-erfolgreich
        navigate('/bezahlen-erfolgreich');
      }else{
        navigate('/zahlenform')
      }
    }, 4000);
>>>>>>> 04c6c762d26c280eacd82c67c4af008beb901ee6

    return () => clearTimeout(timeoutId);
<<<<<<< HEAD
  }, []); 
=======
  }, [redirect, navigate]);
>>>>>>> 04c6c762d26c280eacd82c67c4af008beb901ee6

  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        navigate('/bezahlen-erfolgreich');
      }, 4000); // Nach weiteren 5 Sekunden zur Erfolgsseite navigieren
    }
  }, [redirect, navigate]);
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
      <div>
        <h2 className="text-center">Bearbeite Zahlen</h2>
        <img src="/images/process.png" alt="Prozess" className="mx-auto d-block" />
        <p className="text-center">Additional content...</p>
      </div>

<<<<<<< HEAD
      {/* Button to navigate back to the scanned product list */}
      <button style={{ margin: 'auto' }} className="btn btn-primary" onClick={handleAbbrechen}>
=======
      <button className="btn btn-primary" onClick={handleAbbrechen}>
>>>>>>> 04c6c762d26c280eacd82c67c4af008beb901ee6
        Abbrechen
      </button>
    </div>
  );
};
export default BearbeitZahlen;
