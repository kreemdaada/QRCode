import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <div className="container mt-5 text-center">
        <h1 className="display-4 mt-3">Willkommen zurück</h1>
        <img
          src="/images/scanner.png" 
          alt="Welcome Image"
          className="img-fluid rounded mt-4" 
          style={{ maxWidth: '100%' }}

        />
        <p className="lead mt-3">
          Vielen Dank für die Registrierung. Wir freuen uns, Sie wieder begrüßen zu dürfen.
        </p>
        <div className='d-flex justify-content-between'>
        <Link to="/welcome" className="btn btn-outline-primary">
          Zurück zur Home
        </Link>
        <Link to="/kamera" className="btn btn-outline-primary">
           Zur Scannen
        </Link>
        <Link to="/gescannteproduktelist" className="btn btn-outline-primary">
           Zur Liste
        </Link> 
      </div>
    </div>
    </div>
  );
};

export default WelcomePage;