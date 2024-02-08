import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      
      <div className="container mt-5 text-center">
        <h1 className="display-4 mt-3">Willkommen zurück</h1>
        <img
          src="/images/scanner.png" // Replace with the actual path to your image
          alt="Welcome Image"
          className="img-fluid rounded  mt-4" // Add Bootstrap classes for styling
        />
        <p className="lead mt-3">
          Vielen Dank für die Registrierung. Wir freuen uns, Sie wieder begrüßen zu dürfen.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Zurück zur Registrierung
        </Link>
        <Link to="/kamera" className="btn btn-primary mt-3">
           Zur Scannen
        </Link>
        <Link to="/gescannteproduktelist" className="btn btn-primary mt-3">
           Zur Liste
        </Link> 

      </div>
    </div>
  );
};


export default WelcomePage;