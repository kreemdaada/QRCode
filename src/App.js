import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './registrationform/RegistrationForm';
import WelcomePage from './welcome/WelcomePage';
import Kamera from './kamera/Kamera';
import Navbar from './welcome/Navbar';
import ZahlenMethod from './zahlen/ZahlenMethod';
import ZahlenForm from './zahlenform/ZahlenForm';
import BearbeitZahlen from './bearbeiten/BearbeitZahlen';
import BezahlenErfolgreich from './bezahlen-erfolgreich/BezahlenErfolgreich';
import GescannteProdukteList from './gescannteproduktelist/GescannteProdukteList';

function App() {
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [gescannteProdukte, setGescannteProdukte] = useState([]);

  // Funktionen zum Bearbeiten und Löschen von gescannten Produkten
  const handleDelete = (produktId) => {
    const aktualisierteProdukte = gescannteProdukte.filter((produkt) => produkt.id !== produktId);
    setGescannteProdukte(aktualisierteProdukte);
    console.log(`Produkt mit ID ${produktId} gelöscht`);
  };

  const handleEdit = (produktId, updatedProduct) => {
    setGescannteProdukte((prevProducts) =>
      prevProducts.map((produkt) => (produkt.id === produktId ? { ...produkt, ...updatedProduct } : produkt))
    );

    console.log(`Produkt mit ID ${produktId} bearbeiten`);
  };

   // Function to handle the addition of products
   const handleAdd = (produktId) => {
    setGescannteProdukte((prevProducts) =>
      prevProducts.map((produkt) =>
        produkt.id === produktId ? { ...produkt, quantity: (produkt.quantity || 0) + 1 } : produkt
      )
    );
    console.log(`Produkt mit ID ${produktId} geaddet`);
  };

  // Function to handle the subtraction of products
  const handleSubtract = (produktId) => {
    setGescannteProdukte((prevProducts) =>
      prevProducts.map((produkt) =>
        produkt.id === produktId && produkt.quantity > 0
          ? { ...produkt, quantity: produkt.quantity - 1 }
          : produkt
      )
    );
    console.log(`Produkt mit ID ${produktId} subtrahieren`);
  };

  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route
          path="/"
          element={<RegistrationForm onRegistration={() => setRegistered(true)} onLogin={() => setLoggedIn(true)} />}
        />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route
          path="/kamera"
          element={<Kamera />}
        />
       <Route
        path="/gescannteproduktelist"
        element={
          <GescannteProdukteList
            gescannteProdukte={gescannteProdukte}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onAdd={handleAdd}
            onSubtract={handleSubtract}
            />
          }
        />
        <Route path="/zahlen" element={<ZahlenMethod />} />
        <Route path="/zahlenform" element={<ZahlenForm />} />
        <Route path="/bearbeiten" element={<BearbeitZahlen />} />
        <Route path="/bezahlen-erfolgreich" element={<BezahlenErfolgreich />} />
      </Routes>
    </Router>
  );
}

export default App;
