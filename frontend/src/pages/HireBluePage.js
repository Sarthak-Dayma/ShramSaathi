

import React, { useState } from "react";
import "./HireBluPage.css"; // Reuse the existing CSS file for styles

const jobTypes = ["Full Time", "Part Time", "Temporary/Daily Wage"];
const categories = ["Manual Labor", "Skilled Trade", "Driving/Logistics", "Housekeeping", "Security", "Other"];
const educationLevels = ["10th Pass or Below", "12th Pass", "ITI/Diploma", "Graduate"];
const experienceLevels = ["Fresher (0-1 Year)", "Experienced (1-3 Years)", "Senior (3+ Years)"];

const HireBluePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full Time",
    category: "Manual Labor",
    educationLevel: "10th Pass or Below",
    experience: "Fresher (0-1 Year)",
    description: "",
    contactEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. In a real application, you would send 'formData' to your backend API here.
    console.log("Job Post Submitted:", formData);

    // 2. Display a success message or redirect the user
    alert(`Thank you, ${formData.company}! Your job for '${formData.title}' has been submitted.`);
    
    // 3. Clear the form (optional)
    setFormData({
      title: "",
      company: "",
      location: "",
      salary: "",
      type: "Full Time",
      category: "Manual Labor",
      educationLevel: "10th Pass or Below",
      experience: "Fresher (0-1 Year)",
      description: "",
      contactEmail: "",
    });
  };

  return (
    <div className="jobs-page"> {/* Reusing the main page wrapper class */}
      
      {/* Hero Section */}
      <div className="hire-hero-container">
        <div className="hire-hero-content">
          <h1 className="hire-title">Hire the Best Blue-Collar Talent 🛠️</h1>
          <p className="hire-subtitle">Post your job openings and connect with thousands of skilled workers instantly.</p>
        </div>
      </div>

      {/* Job Post Form Section */}
      <div className="section-block hire-form-section">
        <h2 className="section-title">Post a New Job</h2>
        
        <form className="job-post-form" onSubmit={handleSubmit}>
          
          {/* Company Details */}
          <h3>Company Information</h3>
          <div className="form-row">
            <input 
              type="text" 
              name="company" 
              placeholder="Company Name" 
              value={formData.company} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="contactEmail" 
              placeholder="Contact Email (for applications)" 
              value={formData.contactEmail} 
              onChange={handleChange} 
              required 
            />
          </div>

          <hr />

          {/* Job Details */}
          <h3>Job Requirements</h3>
          <div className="form-row full-width">
            <input 
              type="text" 
              name="title" 
              placeholder="Job Title (e.g., Plumbing Technician)" 
              value={formData.title} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-row">
            <input 
              type="text" 
              name="location" 
              placeholder="Job Location (e.g., Yelahanka, Bengaluru)" 
              value={formData.location} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="text" 
              name="salary" 
              placeholder="Salary (e.g., ₹ 15,000 / Month)" 
              value={formData.salary} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          {/* Select Fields */}
          <div className="form-row three-cols">
            <select name="type" value={formData.type} onChange={handleChange}>
              {jobTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
            
            <select name="category" value={formData.category} onChange={handleChange}>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            
            <select name="educationLevel" value={formData.educationLevel} onChange={handleChange}>
              {educationLevels.map(level => <option key={level} value={level}>{level}</option>)}
            </select>
          </div>
          
          <div className="form-row full-width">
             <select name="experience" value={formData.experience} onChange={handleChange}>
              {experienceLevels.map(exp => <option key={exp} value={exp}>{exp}</option>)}
            </select>
          </div>

          {/* Description */}
          <div className="form-row full-width">
            <textarea 
              name="description" 
              placeholder="Detailed Job Description and Responsibilities (Min 50 characters)" 
              value={formData.description} 
              onChange={handleChange} 
              rows="5"
              minLength="50"
              required 
            />
          </div>

          <button type="submit" className="post-job-btn find-jobs-btn">
            ✅ Post Job Now
          </button>
        </form>
      </div>

    </div>
  );
};

export default HireBluePage;