import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

const BezahlenErfolgreich = () => {
  const [bestellnummer, setBestellnummer] = useState(null);

  useEffect(() => {
    // Hier implementierst du die Logik für eine erfolgreiche Zahlung und erhältst die Bestellnummer
    const bestellnummer = generateBestellnummer();
    setBestellnummer(bestellnummer);
  }, []); // Achten Sie darauf, dass diese Effekt-Funktion nur einmal nach dem Rendern aufgerufen wird

  const generateBestellnummer = () => {
    // Beispiel: Zufällige Bestellnummer
    return Math.floor(Math.random() * 1000000).toString();
  };

  return (
    <div className="text-center mt-5">
      <h2>Bezahlen Erfolgreich</h2>
      <img src="images/erledigt.png" alt="Bezahltes Bild" className="mx-auto d-block mt-4" />
      <p className="mt-3">Vielen Dank für Ihre Zahlung!</p>

      {bestellnummer && (
        <div>
          <p>Ihre Bestellnummer: {bestellnummer}</p>
          <QRCode value={bestellnummer} />
        </div>
      )}
    </div>
  );
};

export default BezahlenErfolgreich;
