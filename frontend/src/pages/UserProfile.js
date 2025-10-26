// src/pages/UserProfile.js
import React from 'react';
import './Profile.css'; // We'll create/update this file

// This component receives the user data as a prop
const UserProfile = ({ user }) => {
  return (
    <div className="profile-content">
      <div className="profile-header">
        <h2>Welcome, {user.name}!</h2>
        <p>Role: Job Seeker</p>
        <p>Email: {user.email}</p>
        {/* Add more user details here */}
      </div>
      
      <div className="profile-section">
        <h3>My Applications</h3>
        <p>(Application list will appear here...)</p>
      </div>
      
      <div className="profile-section">
        <h3>My Resume/CV</h3>
        <button className="submit-btn-alt">Upload Resume</button>
      </div>
      
      <div className="profile-section">
        <h3>Saved Jobs</h3>
        <p>(Saved jobs will appear here...)</p>
      </div>
    </div>
  );
};

export default UserProfile;