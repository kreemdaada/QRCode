import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const GescannteProdukteList = ({ gescannteProdukte, onDelete, onEdit, onAdd, onSubtract }) => {
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
      // Assuming you have an onEdit function to handle product editing
      onEdit(editProductId, editedProduct);
  
      // Set the edited information back to initial state
      setEditProductId(null);
      setEditedProduct({ name: '', preis: 0 });
    };
    const berechneGesamtsumme = () => {
        const gesamtsumme = gescannteProdukte.reduce((sum, produkt) => sum + produkt.preis, 0);
        return gesamtsumme.toFixed(2); // Rundet die Gesamtsumme auf zwei Dezimalstellen
      };
  return (
    
    <><div className="mt-4">
          <h2 className="mb-3">Gescannte Produkte</h2>
          <ul className="list-group">
              {gescannteProdukte.map((produkt) => (
                  <li key={produkt.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                          {editProductId === produkt.id ? (
                              <div className="input-group">
                                  <input
                                      type="text"
                                      className="form-control me-2"
                                      placeholder="Produktname"
                                      value={editedProduct.name}
                                      onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })} />
                                  <input
                                      type="number"
                                      className="form-control"
                                      placeholder="Preis"
                                      value={editedProduct.preis}
                                      onChange={(e) => setEditedProduct({ ...editedProduct, preis: parseFloat(e.target.value) || 0 })} />
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
                                  <button onClick={handleEditSave} className="btn btn-success me-2">
                                      Speichern
                                  </button>
                                  <button onClick={handleEditCancel} className="btn btn-secondary me-2">
                                      Abbrechen
                                  </button>
                              </>
                          ) : (
                              <>
                                  <button onClick={() => onDelete(produkt.id)} className="btn btn-danger me-2">
                                      Löschen
                                  </button>
                                  <button onClick={() => handleEditStart(produkt.id)} className="btn btn-primary me-2">
                                      Bearbeiten
                                  </button>
                                  <button onClick={() => onAdd(produkt.id)} className="btn btn-success me-2">
                                      Hinzufügen
                                  </button>
                              </>
                          )}
                      </div>
                  </li>
              ))}
          </ul>
          <li className="list-group-item d-flex justify-content-between align-items-center">
              Produkt 1 - 10 €
              <button className="btn btn-danger me-2" onClick={() => onDelete(1)}>
                  Löschen
              </button>
              <button className="btn btn-primary me-2" onClick={() => onEdit(1)}>
                  Bearbeiten
              </button>
              <button className="btn btn-success me-2" onClick={() => onAdd(1)}>
                  Hinzufügen
              </button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
              Produkt 2 - 15 €
              <button className="btn btn-danger me-2" onClick={() => onDelete(2)}>
                  Löschen
              </button>
              <button className="btn btn-primary me-2" onClick={() => onEdit(2)}>
                  Bearbeiten
              </button>
              <button className="btn btn-success me-2" onClick={() => onAdd(2)}>
                  Hinzufügen
              </button>
          </li>

          <p className="mt-3">Gesamtsumme: {berechneGesamtsumme()} €</p>
      </div><div>
              <Link to="/zahlen" className="btn btn-primary mt-3">
                  Zur Zahlung
              </Link>
          </div></>
  );
};

export default GescannteProdukteList;
