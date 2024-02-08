import React from 'react';
import { Link } from 'react-router-dom';

const BezahlenErfolgreich = () => {
  return (
    <div>
      <h2>Bezahlen Erfolgreich</h2>
      <img src="images/erledigt.png" alt="Bezahltes Bild" />
      <p>Vielen Dank für Ihre Zahlung!</p>

      {/* Link to navigate back to the Kamera component */}
      <Link to="/kamera" className="btn btn-primary">
        Weiter Kaufen
      </Link>
    </div>
  );
};

export default BezahlenErfolgreich;