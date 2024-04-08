import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ZahlenForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    dateOfBirth: '',
    iban: '',
  });

  // Handler for form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    
  const handleZahlen = () => {
    const data = formData;
    fetch('http://localhost/QR-Code/backend/zahlenform.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Zahlen process completed after 5 seconds', data);
        navigate('/bearbeiten');
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  
    setTimeout(() => {
      console.log('Zahlen process completed after 5 seconds', formData);
      navigate('/bezahlen-erfolgreich');
    }, 5000);
  };
  
    
    useEffect(() => {
      console.log('ZahlenForm component has mounted.');

         // Clean-up function (optional)
      return () => {
        console.log('ZahlenForm component will unmount.');
        // Additional clean-up logic can be added here if needed.
      };
    }, [navigate]);

  return (
    <div className="container mt-5">
      <h2>Zahlungsformular</h2>
      <form>
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Vollständiger Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Adresse
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Geburtsdatum
          </label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        {/* IBAN */}
        <div className="mb-3">
          <label htmlFor="iban" className="form-label">
            IBAN
          </label>
          <input
            type="text"
            className="form-control"
            id="iban"
            name="iban"
            value={formData.iban}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit button */}
        <Link to="/bearbeiten" type="button" className="btn btn-primary me-2"onClick={handleZahlen} >
          Zahlen
        </Link>
        <Link to="/gescannteproduktelist" className="btn btn-primary">
          Abbrechen
        </Link>
      </form>
      <Link to="/gescannteproduktelist" className="btn btn-primary">
        Zurück zu Liste
      </Link>
    </div>
  );
};

export default ZahlenForm;
