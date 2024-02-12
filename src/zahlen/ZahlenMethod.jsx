import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ZahlenMethod = () => {
  const [paypalChecked, setPaypalChecked] = useState(false);
  const [sofortChecked, setSofortChecked] = useState(false);
  const [kreditkarteChecked, setKreditkarteChecked] = useState(false);

  const handleAbbrechen = () => {
    console.log('Cancellation logic here');
  };

  return (
    <div className="container text-center mt-4">
      {/* Image */}
      <img
        src="/images/karte.png" // Replace with the actual image URL
        alt="Zahlungsseite"
        className="img-fluid"
      />

      {/* Checkboxes for Zahlungsmethoden */}
      <div className="container mt-4">
        <h3>Wählen Sie Ihre Zahlungsmethode:</h3>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="paypalCheckbox"
            checked={paypalChecked}
            onChange={() => setPaypalChecked(!paypalChecked)}
          />
          <label className="form-check-label" htmlFor="paypalCheckbox">
            PayPal
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="sofortCheckbox"
            checked={sofortChecked}
            onChange={() => setSofortChecked(!sofortChecked)}
          />
          <label className="form-check-label" htmlFor="sofortCheckbox">
            Sofortüberweisung
          </label>
        </div>
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="kreditkarteCheckbox"
            checked={kreditkarteChecked}
            onChange={() => setKreditkarteChecked(!kreditkarteChecked)}
          />
          <label className="form-check-label" htmlFor="kreditkarteCheckbox">
            Kreditkarte
          </label>
        </div>
      </div>

      {/* Your content for ZahlenMethod component */}
      <h2 className="mt-4">ZahlenMethod Component</h2>

      {/* Buttons for Abbrechen and navigation to ZahlenForm */}
      <div className="mt-4">
        <Link to="/gescannteproduktelist" className="btn btn-secondary me-2" onClick={handleAbbrechen}>
          Abbrechen
        </Link>
        <Link to="/zahlenform" className="btn btn-primary">
          zur ausführen
        </Link>
      </div>
    </div>
  );
};

export default ZahlenMethod;
