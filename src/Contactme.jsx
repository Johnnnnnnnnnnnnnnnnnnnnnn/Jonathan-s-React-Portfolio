import './styles/Contactme.css'

import React, { useState } from 'react';

function Contactme() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      name: '',
      email: '',
      message: ''
    });

    let formIsValid = true;
    if (formData.name.trim() === '') {
      setErrors(prevErrors => ({
        ...prevErrors,
        name: 'Please enter your name.'
      }));
      formIsValid = false;
    }
    if (formData.email.trim() === '') {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Please enter an email address.'
      }));
      formIsValid = false;
    } else if (!isValidEmail(formData.email)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Please enter a valid email address.'
      }));
      formIsValid = false;
    }
    if (formData.message.trim() === '') {
      setErrors(prevErrors => ({
        ...prevErrors,
        message: 'Please enter a message.'
      }));
      formIsValid = false;
    }

    if (formIsValid) {
      console.log('Form submitted:', formData);
    }
  };

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="inputs inputsLabel" htmlFor="name">Name:</label>
          <input
            className="inputs nameInput"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label className="inputs inputsLabel" htmlFor="email">Email:</label>
          <input
            className="inputs emailInput"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label className="inputs inputsLabel" htmlFor="message">Message:</label>
          <textarea
            className="inputs textAreaInput"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button className="inputs" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contactme;