// src/pages/ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css'; // We'll create this next

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send this data to your backend or email service
    console.log('Contact Form Submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-us-page">
      <section className="contact-hero-section">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
      </section>

      <section className="contact-content-section">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> [Your Company Address, Pune, Maharashtra]</p>
          <p><strong>Email:</strong> <a href="mailto:[your-email@example.com]">[your-email@example.com]</a></p>
          <p><strong>Phone:</strong> [Your Phone Number]</p>
          {/* Add map embed if desired */}
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;