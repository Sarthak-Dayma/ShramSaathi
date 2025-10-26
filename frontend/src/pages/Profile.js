// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
// Import the new role-based profiles
import UserProfile from './UserProfile';
import EmployerProfile from './EmployerProfile';
import './Profile.css'; // We'll create this CSS file

const Profile = () => {
  // --- Mock Authentication ---
  // Once Django is connected, you will use React Context or a state
  // management library to get the currently logged-in user.
  // For now, we will mock it.
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data after login
    // TO TEST: Change 'role' to 'employer' to see the other profile
    const mockLoggedInUser = {
      id: 1,
      name: 'Sarthak Dayma',
      email: 'sarthak@example.com',
      role: 'user', // <-- CHANGE TO 'employer' TO TEST
    };

    // const mockLoggedInEmployer = {
    //   id: 2,
    //   name: 'Tech Solutions Ltd.',
    //   email: 'hr@techsolutions.com',
    //   role: 'employer',
    // };

    setUser(mockLoggedInUser);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="profile-page-container"><h2>Loading profile...</h2></div>;
  }

  if (!user) {
    // This would happen if the user is not logged in
    // You'd typically redirect to /login
    return <div className="profile-page-container"><h2>Please log in to view your profile.</h2></div>;
  }

  // Render the correct profile based on the user's role
  return (
    <div className="profile-page-container">
      {user.role === 'user' ? (
        <UserProfile user={user} />
      ) : (
        <EmployerProfile user={user} />
      )}
    </div>
  );
};

export default Profile;