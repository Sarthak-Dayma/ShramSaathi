import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [language, setLanguage] = useState("English");

  const toggleCard = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <span className="highlight">S</span>
          <span>hram</span>
          <span className="highlight">S</span>
          <span>aath</span>
          <span className="i-container">
            ı
            <span className="dot"></span>
          </span>
        </div>

        {/* Cards for Jobs, Post Jobs, Services */}
        <div className="nav-cards">
          <div className="nav-card" onClick={() => toggleCard('jobs')}>Jobs</div>
          <div className="nav-card" onClick={() => toggleCard('postjobs')}>Post Jobs</div>
          <div className="nav-card" onClick={() => toggleCard('services')}>Services</div>
        </div>

        <input 
          type="text" 
          placeholder="Find jobs" 
          className="search-bar"
        />
      </div>

      <div className="right-section">
        {/* Language Dropdown */}
        <select 
          className="language-select" 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Hindi">हिन्दी</option>
          <option value="Marathi">मराठी</option>
        </select>

        <a href="#" className="nav-link">Login</a>
        <a href="#" className="nav-link">/</a>
        <a href="#" className="nav-link">Sign In</a>
      </div>

      {/* Floating Cards Section */}
      {activeCard === 'jobs' && (
        <div className="floating-card">
          <div className="card-column">
            <h3>Jobs in Demand</h3>
            <ul>
              <li>Construction Workers</li>
              <li>Electricians</li>
              <li>Plumbers</li>
              <li>Gardner</li>
              <li>Carpenters</li>
              <li>Delivery Drivers</li>
              <li>Housekeeping Staff</li>
              <li>Security Guards</li>
              <li>Factory Workers</li>
            </ul>
          </div>
          <div className="card-column">
            <h3>Types of Job</h3>
            <ul>
              <li>Full-Time</li>
              <li>Part-Time</li>
              <li>Contract</li>
            </ul>
          </div>
          <div className="card-column">
            <h3>Jobs by Location</h3>
            <ul>
              <li>Mumbai</li>
              <li>Pune</li>
              <li>Nashik</li>
              <li>Kolhapur</li>
              <li>Thane</li>
              <li>Aurangabad</li>
              <li>Ahmednagar</li>
              <li>Solapur</li>
              <li>Satara</li>
            </ul>
          </div>
        </div>
      )}

      {activeCard === 'postjobs' && (
        <div className="floating-card">
          <div className="card-column">
            <h3>Post for Employers</h3>
            <ul>
              <li>Skilled Workers</li>
              <li>Daily Wage Workers</li>
              <li>Technicians</li>
            </ul>
          </div>
          <div className="card-column">
            <h3>Job Type</h3>
            <ul>
              <li>Short-Term</li>
              <li>Long-Term</li>
              <li>Seasonal</li>
            </ul>
          </div>
          <div className="card-column">
            <h3>Industries</h3>
            <ul>
              <li>Construction</li>
              <li>Manufacturing</li>
              <li>Transport</li>
            </ul>
          </div>
        </div>
      )}

      {activeCard === 'services' && (
        <div className="floating-card">
          <div className="card-column">
            <h3>Skill Training</h3>
            <ul>
              <li>Welding workshops</li>
              <li>Electrical repair courses</li>
              <li>Plumbing certifications</li>
            </ul>
          </div>
          <div className="card-column">
            <h3>Health & Safety</h3>
            <ul>
              <li>Workplace safety training</li>
              <li>First aid guidance</li>
              <li>Protective gear support</li>
            </ul>
          </div>
          <div className="card-column">
            <h3>Support & Welfare</h3>
            <ul>
              <li>Legal advice</li>
              <li>Insurance plans</li>
              <li>Community programs</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};


export default Header;

