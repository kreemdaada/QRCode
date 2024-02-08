import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const RegistrationForm = ({ onRegistration, onLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Use useNavigate instead of useHistory
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulardaten:', formData);

    onRegistration();

    // Use navigate function to navigate to the welcome page
    navigate('/welcome');
  };

  const handleLogin = () => {
    console.log('Benutzer anmelden');

    const simulatedLoginSuccess = true;

    if (simulatedLoginSuccess) {
      onLogin();
      navigate('/welcome');
    } else {
      alert('Anmeldung fehlgeschlagen. Überprüfen Sie Benutzername und Passwort.');
    }
  };

  return (
    <div className="container mt-5">
      <div>
        <h2>Registrierung</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Vorname:
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Nachname:
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-Mail:
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Passwort:
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Passwort wiederholen:
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control"
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Registrieren
          </button>
        </form>
      </div>

      <div className="mt-4">
        <h2>Anmeldung</h2>
        <button onClick={handleLogin} className="btn btn-secondary">
          Anmelden
        </button>
      </div>
    </div>
  );
};
export default RegistrationForm;
