import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GescannteProdukteList = ({ gescannteProdukte, onDelete, onEdit, onAdd, scannedData }) => {
  const [editProductId, setEditProductId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({ name: '', preis: 0 });

  const handleEditStart = (produktId) => {
    const produktToEdit = gescannteProdukte.find((produkt) => produkt.id === produktId);
    setEditProductId(produktId);
    setEditedProduct(produktToEdit);
  };

  const handleEditCancel = () => {
    setEditProductId(null);
    setEditedProduct({ name: '', preis: 0 });
  };

  const handleEditSave = () => {
    onEdit(editProductId, editedProduct);
    setEditProductId(null);
    setEditedProduct({ name: '', preis: 0 });
  };

  const berechneGesamtsumme = () => {
    const gesamtsumme = gescannteProdukte.reduce((sum, produkt) => sum + produkt.preis, 0);
    return gesamtsumme.toFixed(2); // Rundet die Gesamtsumme auf zwei Dezimalstellen
  };

  // Gescannte Daten
  const gescannteDaten = {
    produktName: 'Produkt A',
    preis: 10.99,
  };

  // Api-Anfrage
  const sendScannedDataToAPI = () => {
    fetch('http://localhost/my-react-app/backend/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gescannteDaten),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Antwort von API:', data);
      })
      .catch((error) => {
        console.error('Fehler beim Senden an die API:', error);
      });
  };

  useEffect(() => {
    if (scannedData) {
      sendScannedDataToAPI();
    }
  }, [scannedData]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Gescannte Produkte</h2>
      <ul className="list-group">
        {gescannteProdukte.map((produkt) => (
          <li
            key={produkt.id}
            className="list-group-item d-flex justify-content-between align-items-center bg-light p-2 mb-2"
            style={{
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              borderRadius: '5px',
            }}
          >
            <div className="text-center">
              {editProductId === produkt.id ? (
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Produktname"
                    value={editedProduct.name}
                    onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Preis"
                    value={editedProduct.preis}
                    onChange={(e) => setEditedProduct({ ...editedProduct, preis: parseFloat(e.target.value) || 0 })}
                  />
                </div>
              ) : (
                <>
                  {produkt.name} - {produkt.preis} €
                </>
              )}
            </div>
            <div>
              {editProductId === produkt.id ? (
                <>
                  <button onClick={handleEditSave} className="btn btn-success me-2 rounded">
                    Speichern
                  </button>
                  <button onClick={handleEditCancel} className="btn btn-secondary me-2 rounded">
                    Abbrechen
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => onDelete(produkt.id)} className="btn btn-danger me-2 rounded">
                    Löschen
                  </button>
                  <button onClick={() => handleEditStart(produkt.id)} className="btn btn-primary me-2 rounded">
                    Bearbeiten
                  </button>
                  <button onClick={() => onAdd(produkt.id)} className="btn btn-success me-2 rounded">
                    Hinzufügen
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-center">Gesamtsumme: {berechneGesamtsumme()} €</p>

      <div className="mt-3 text-center">
        <Link to="/zahlen" className="btn btn-primary rounded">
          Zur Zahlung
        </Link>
      </div>
    </div>
  );
};

export default GescannteProdukteList;

