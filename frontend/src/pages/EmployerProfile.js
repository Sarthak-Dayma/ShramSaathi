// src/pages/EmployerProfile.js
import React from 'react';
import './Profile.css'; // We'll create/update this file

// This component receives the user data as a prop
const EmployerProfile = ({ user }) => {
  return (
    <div className="profile-content">
      <div className="profile-header">
        <h2>Welcome, {user.name}!</h2>
        <p>Role: Employer</p>
        <p>Email: {user.email}</p>
        {/* Add more employer/company details here */}
      </div>
      
      <div className="profile-section">
        <h3>Posted Jobs</h3>
        <p>(List of posted jobs will appear here...)</p>
        <button className="submit-btn-alt">Post a New Job</button>
      </div>
      
      <div className="profile-section">
        <h3>Received Applications</h3>
        <p>(Applications for your jobs will appear here...)</p>
      </div>
      
      <div className="profile-section">
        <h3>Company Profile</h3>
        <p>(Edit your company details here...)</p>
      </div>
    </div>
  );
};

export default EmployerProfile;