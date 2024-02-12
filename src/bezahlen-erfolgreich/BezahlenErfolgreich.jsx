import React from 'react';
import { Link } from 'react-router-dom';

const BezahlenErfolgreich = () => {
  return (
    <div className="text-center mt-5">
      <h2>Bezahlen Erfolgreich</h2>
      <img src="images/erledigt.png" alt="Bezahltes Bild" className="mx-auto d-block mt-4" />
      <p className="mt-3">Vielen Dank für Ihre Zahlung!</p>

      {/* Link to navigate back to the Kamera component */}
      <Link to="/kamera" className="btn btn-primary mt-3">
        Weiter Kaufen
      </Link>
    </div>
  );
};

export default BezahlenErfolgreich;
