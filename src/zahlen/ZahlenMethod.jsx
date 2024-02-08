import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ZahlenMethod = () => {
  const [paypalChecked, setPaypalChecked] = useState(false);
  const [sofortChecked, setSofortChecked] = useState(false);
  const [kreditkarteChecked, setKreditkarteChecked] = useState(false);
  const handleAbbrechen = () => {
    // Implement logic to handle Abbrechen (e.g., navigate back to the gescannteproduktelist component)
  };

  const handleBezahlen = () => {
    // Implement logic to handle Bezahlen (e.g., navigate to the payment form component)
  };
  return (
    <div>
      {/* Image */}
      <div className="text-center mt-4">
        <img
          src="/images/karte.png" // Replace with the actual image URL
          alt="Zahlungsseite"
          style={{ maxWidth: '100%', maxHeight: '400px' }}
        />
      </div>

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
        <div className="form-check">
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
      <div>
      {/* Your content for ZahlenMethod component */}
      <h2>ZahlenMethod Component</h2>

      {/* Buttons for Abbrechen and Bezahlen */}
      <div>
        <Link to="/gescannteproduktelist" className="btn btn-secondary me-2" onClick={handleAbbrechen}>
          Abbrechen
        </Link>
        <Link to="/zahlenform" className="btn btn-primary" onClick={handleBezahlen}>
          zur ausführen
        </Link>
      </div>
    </div>
    </div>
    
  );
};

export default ZahlenMethod;