import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({ onRegistration, onLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAuthentication = () => {
    fetch('http://localhost/QR-Code/backend/database.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        ...formData,
        isLogin, // Include isLogin flag in the request
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          if (isLogin) {
            // Handle login success
            onLogin();
            navigate('/welcome');
          } else {
            // Handle registration success
            onRegistration();
            navigate('/welcome');
          }
        } else {
          alert(`Operation failed: ${data.error}`);
        }
      })
      .catch((error) => {
        console.error('Error in AJAX request:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuthentication();
  };

  const toggleMode = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleAnmelden = () => {
    toggleMode(); // Call toggleMode when needed
    navigate('/welcome');
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <div>
      <h2>{isLogin ? 'Anmeldung' : 'Registrierung'}</h2>
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
          {isLogin ? 'Anmelden' : 'Registrieren'}
            
          </button>
        </form>
      </div>

      <div className="mt-4 row justify-content-between">
      <button onClick={handleAnmelden} className="btn btn-secondary">
        {isLogin ? 'Registrieren' : 'Anmelden'}
      </button>
      </div>
    </div>
  );
};
export default RegistrationForm;
