import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { Link } from 'react-router-dom';
import GescannteProdukteList from '../gescannteproduktelist/GescannteProdukteList';

const Kamera = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (error) => {
    console.error('QR Code Scanner Error:', error);
  };

  return (
    <div>
      <Link to="/" className="btn btn-primary mt-3">
        Zurück zur Registrierung
      </Link>
      <h1 className="mt-3">QR Code Scanner</h1>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && (
        <>
          <p>Gescannter QR Code: {result.text}</p>
          <GescannteProdukteList gescannteProdukte={[{ id: 1, name: 'Produkt', preis: 10 }]} />
        </>
      )}
      <Link to="/gescannteproduktelist" className="btn btn-primary mt-3">
        Zur Liste
      </Link>
    </div>
  );
};

export default Kamera;
