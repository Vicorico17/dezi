import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    service: 'general_pest_control',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Appointment requested! We will contact you shortly.');
  };

  return (
    <div className="booking-form-wrapper">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nume</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresă</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="service">De ce serviciu aveți nevoie?</label>
          <select id="service" name="service" value={formData.service} onChange={handleChange}>
            <option value="general_pest_control">Dezinsecție generală</option>
            <option value="bed_bug_treatment">Tratament ploșnițe</option>
            <option value="rodent_control">Deratizare</option>
            <option value="other">Altul</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Data preferată</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Ora preferată</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
          </div>
        </div>
        <div className="price-display">
          Preț: 300 LEI
        </div>
        <button type="submit" className="submit-button">Solicită programare</button>
      </form>
    </div>
  );
};

export default BookingForm; 