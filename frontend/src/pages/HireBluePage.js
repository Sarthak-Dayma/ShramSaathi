// src/pages/HireBluePage.js
import React, { useState } from 'react';
import './HireBluPage.css';

const HireBluePage = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: 'full-time',
    category: 'construction',
    salary: '',
    description: '',
    educationLevel: 'any',
    experience: '0-1',
    contactEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- UPDATE handleSubmit FOR API CALL ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // --- API Call Simulation ---
    console.log('Sending form data to backend:', formData);

    try {
      // When your Django backend is ready, uncomment this:
      /*
      const response = await fetch('/api/jobs/create', { // Your future API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer YOUR_AUTH_TOKEN' // Add auth later
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Job posted successfully:', result);
        alert('Job posted successfully!');
        // Clear form
        setFormData({
          jobTitle: '', companyName: '', location: '', jobType: 'full-time',
          category: 'construction', salary: '', description: '',
          educationLevel: 'any', experience: '0-1', contactEmail: '',
        });
      } else {
        console.error('Failed to post job');
        alert('Failed to post job. Please try again.');
      }
      */

      // --- Mock success for now ---
      alert('Job posted successfully! (Mock)');
      setFormData({
        jobTitle: '', companyName: '', location: '', jobType: 'full-time',
        category: 'construction', salary: '', description: '',
        educationLevel: 'any', experience: '0-1', contactEmail: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="hire-page-container">
      <header className="hire-hero">
        <h1>Post a Job on ShramSaathi</h1>
        <p>Find the best blue-collar talent for your needs.</p>
      </header>
      
      <form className="hire-form" onSubmit={handleSubmit}>
        <div className="form-section-header">
          <h2>Job Details</h2>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Location (City)</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="jobType">Job Type</label>
            <select id="jobType" name="jobType" value={formData.jobType} onChange={handleChange}>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Job Category</label>
            <select id="category" name="category" value={formData.category} onChange={handleChange}>
              <option value="construction">Construction</option>
              <option value="factory">Factory</option>
              <option value="driver">Driver</option>
              <option value="delivery">Delivery</option>
              <option value="plumber">Plumber</option>
              <option value="electrician">Electrician</option>
              <option value="hospitality">Hospitality</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary Range (e.g., ₹15,000 - ₹20,000)</label>
            <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Job Description</label>
          <textarea id="description" name="description" rows="6" value={formData.description} onChange={handleChange} required></textarea>
        </div>

        <div className="form-section-header">
          <h2>Requirements</h2>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="educationLevel">Education Level</label>
            <select id="educationLevel" name="educationLevel" value={formData.educationLevel} onChange={handleChange}>
              <option value="any">Any</option>
              <option value="10th">10th Pass</option>
              <option value="12th">12th Pass</option>
              <option value="iti">ITI/Diploma</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="experience">Experience Required</label>
            <select id="experience" name="experience" value={formData.experience} onChange={handleChange}>
              <option value="0-1">0-1 Year</option>
              <option value="1-3">1-3 Years</option>
              <option value="3-5">3-5 Years</option>
              <option value="5+">5+ Years</option>
            </select>
          </div>
        </div>

        <div className="form-section-header">
          <h2>Contact</h2>
        </div>

        <div className="form-group">
            <label htmlFor="contactEmail">Contact Email or Phone</label>
            <input type="text" id="contactEmail" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">Post Job</button>
      </form>
    </div>
  );
};

export default HireBluePage;