import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GescannteProdukteList from '../gescannteproduktelist/GescannteProdukteList';

const Kamera = () => {
  const [scannedData, setScannedData] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (error) => {
    console.error('QR Code Scanner Error:', error);
    // Benachrichtigung für den Benutzer über den Fehler
    toast.error('Fehler beim Scannen des QR-Codes. Bitte versuchen Sie es erneut.', {
      position: 'top-center',
      autoClose: 5000, // Auto-Close nach 5 Sekunden
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
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
      {scannedData && (
        <>
          <p>Gescannter QR Code: {scannedData.text}</p>
          <GescannteProdukteList gescannteProdukte={[{ id: 1, name: 'Produkt', preis: 10 }]} />
        </>
      )}
      <Link to="/gescannteproduktelist" className="btn btn-primary mt-3">
        Zur Liste
      </Link>

      {/* Toast-Benachrichtigungskomponente */}
      <ToastContainer />
    </div>
  );
};

export default Kamera;
