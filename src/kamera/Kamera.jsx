import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GescannteProdukteList from '../gescannteproduktelist/GescannteProdukteList';

const Kamera = () => {
  const [scannedData, setScannedData] = useState('');
  const [gescannteDaten, setGescannteDaten] = useState({
    produktName: '',
    preis: 0,
    menge: 1, // Default value for menge
  });

  const extractDataFromScannedData = (data) => {
    try {
      const parsedData = JSON.parse(data.text);
      const { produktName, preis } = parsedData;
      return { produktName, preis, menge: 1 }; // Default value for menge
    } catch (error) {
      console.error('Error parsing scanned data:', error);
      return { produktName: '', preis: 0, menge: 1 }; // Default value for menge
    }
  };

  const handleScan = (data) => {
    if (data) {
      const extractedData = extractDataFromScannedData(data);
      setGescannteDaten(extractedData);
      setScannedData(data);
    }
  };

  const handleError = (error) => {
    console.error('QR Code Scanner Error:', error);
    toast.error('Fehler beim Scannen des QR-Codes. Bitte versuchen Sie es erneut.', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="kamera-container text-center">
      <Link to="/" className="btn btn-primary mt-3">
        Zurück zur Registrierung
      </Link>
      <h1 className="mt-3">QR Code Scanner</h1>
      <QrScanner delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} />
      {scannedData && (
        <>
          <p>Gescannter QR Code: {scannedData.text}</p>
          <GescannteProdukteList gescannteProdukte={[gescannteDaten]} />
          <p>Mehr Info: {JSON.stringify(gescannteDaten)}</p>
        </>
      )}
      <Link to="/gescannteproduktelist" className="btn btn-primary mt-3">
        Zur Liste
      </Link>
    </div>
  );
};

export default Kamera;
