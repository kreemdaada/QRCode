import React, { useState, useEffect } from 'react';

const BearbeitZahlen = () => {
  const [redirect, setRedirect] = useState(false);

  const handleAbbrechen = () => {
    // Implement logic to handle cancellation
    console.log('Cancellation logic here');
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setRedirect(true);
    }, 6000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run this effect only once when the component mounts

  // Redirect after 6 seconds
  if (redirect) {
    setTimeout(() => {
      window.location.href = '/bezahlen-erfolgreich';
    }, 0); // Use a timeout of 0 to allow the previous state and route change to complete
  }

  return (
    <div>
      <h2>Bearbeite Zahlen</h2>
      <img src="/images/process.png" alt="Prozess" />
      <p>Additional content...</p>

      {/* Button to navigate back to the scanned product list */}
      <button className="btn btn-primary" onClick={handleAbbrechen}>
        Abbrechen
      </button>
    </div>
  );
};

export default BearbeitZahlen;
