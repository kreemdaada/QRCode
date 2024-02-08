import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ZahlungsForm = () => {
  // State to manage form fields
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

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic for handling form submission, e.g., sending data to the server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <h2>Zahlungsformular</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Vollständiger Name</label>
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
          <label htmlFor="address" className="form-label">Adresse</label>
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
          <label htmlFor="dateOfBirth" className="form-label">Geburtsdatum</label>
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
          <label htmlFor="iban" className="form-label">IBAN</label>
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
        <Link to="/bearbeiten" className="btn btn-primary">
        Zahlen
      </Link>
      </form>
      <Link to="/gescannteproduktelist" className="btn btn-primary">
        Bearbeiten
      </Link>
    </div>
  );
};

export default ZahlungsForm;
