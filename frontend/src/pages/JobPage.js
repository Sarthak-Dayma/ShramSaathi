import React, { useState } from "react";
import "./JobPage.css";
import ShramSaathiRoadmap from './img/saathi-roadmap.png'; 

// --- Mock Data (UPDATED) ---
const initialJobs = [
  {
    id: 1,
    title: "Plumbing Technician",
    company: "HouseFix Services",
    location: "Yelahanka, Bengaluru",
    salary: "₹ 15,000 / Month",
    type: "Full Time",
    category: "Skilled Trade",
    educationLevel: "12th Pass",
    experience: "Experienced",
    description: "Installation and repair of plumbing systems. Must have 2+ years experience.",
  },
  {
    id: 2,
    title: "Residential Housekeeping Staff",
    company: "CleanSweep Solutions",
    location: "Whitefield, Bengaluru",
    salary: "₹ 18,000 / Month",
    type: "Full Time",
    category: "Housekeeping",
    educationLevel: "10th Pass or Below",
    experience: "Fresher",
    description: "General cleaning and maintenance for a residential apartment complex.",
  },
  {
    id: 3,
    title: "Delivery Driver (Two-Wheeler)",
    company: "QuickMove Logistics",
    location: "Koramangala, Bengaluru",
    salary: "₹ 30,000 / Month",
    type: "Part Time",
    category: "Driving/Logistics",
    educationLevel: "10th Pass or Below",
    experience: "Experienced",
    description: "Timely pickup and delivery of packages. Must have valid driving license and 1+ year experience.",
  },
  {
    id: 4,
    title: "Automotive Mechanic Assistant",
    company: "Shakti Auto Garage",
    location: "Kattigenahalli, Bengaluru",
    salary: "₹ 20,000 / Month",
    type: "Full Time",
    category: "Skilled Trade",
    educationLevel: "12th Pass",
    experience: "Fresher",
    description: "Assisting senior mechanics with vehicle repair and maintenance. Basic knowledge preferred.",
  },
  {
    id: 5,
    title: "Construction Site Helper (Shramik)",
    company: "Pinnacle Builders",
    location: "Electronic City, Bengaluru",
    salary: "₹ 12,000 - 15,000 / Month",
    type: "Temporary/Daily Wage",
    category: "Manual Labor",
    educationLevel: "10th Pass or Below",
    experience: "Fresher",
    description: "Loading, unloading, and site clean-up duties. No prior experience required.",
  },
  {
    id: 6,
    title: "Security Guard",
    company: "SecureGuard Solutions",
    location: "Jayanagar, Bengaluru",
    salary: "₹ 22,000 / Month",
    type: "Full Time",
    category: "Security",
    educationLevel: "10th Pass or Below",
    experience: "Experienced",
    description: "Day/night shift security duties for a commercial complex. Ex-servicemen preferred.",
  },
  {
    id: 7,
    title: "Electrician Helper",
    company: "Sparky Services",
    location: "Marathahalli, Bengaluru",
    salary: "₹ 16,000 / Month",
    type: "Full Time",
    category: "Skilled Trade",
    educationLevel: "12th Pass",
    experience: "Fresher",
    description: "Assisting electricians with wiring and installation tasks. ITI certificate a plus.",
  },
  {
    id: 8,
    title: "Kitchen Helper/Dishwasher", // New Job 1
    company: "Spice Junction Restaurant",
    location: "Indiranagar, Bengaluru",
    salary: "₹ 14,000 / Month",
    type: "Full Time",
    category: "Housekeeping",
    educationLevel: "10th Pass or Below",
    experience: "Fresher",
    description: "Assisting the kitchen staff with cleaning, dishwashing, and basic food prep.",
  },
  {
    id: 9,
    title: "Machine Operator", // New Job 2
    company: "Precision Manufacturing Ltd.",
    location: "Peenya Industrial Area, Bengaluru",
    salary: "₹ 25,000 / Month",
    type: "Full Time",
    category: "Skilled Trade",
    educationLevel: "12th Pass",
    experience: "Experienced",
    description: "Operating and maintaining CNC and other industrial machines. Prior experience mandatory.",
  },
];

// --- Filter Options (unchanged) ---
const jobTypeOptions = ["All", "Full Time", "Part Time", "Temporary/Daily Wage"];
const categories = ["All", "Manual Labor", "Skilled Trade", "Driving/Logistics", "Housekeeping", "Security"];

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [activeJobTypeFilter, setActiveJobTypeFilter] = useState("All");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");

  const filteredJobs = initialJobs.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = 
      locationTerm === "" || job.location.toLowerCase().includes(locationTerm.toLowerCase());

    const matchesJobType =
      activeJobTypeFilter === "All" || job.type === activeJobTypeFilter;
    
    const matchesCategory =
      activeCategoryFilter === "All" || job.category === activeCategoryFilter;

    return matchesSearch && matchesLocation && matchesJobType && matchesCategory;
  });

  return (
    <div className="jobs-page">
      
      {/* 1. Hero Section with Search Bar */}
      <div className="hero-search-container">
        <h1 className="hero-title">GET A JOB IN FEW CLICKS</h1>
        <p className="hero-subtitle">Your companion for finding the right blue-collar opportunities.</p>
        <div className="search-inputs-wrapper">
          <input
            type="text"
            placeholder="Search by job title, skill, or company..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location (e.g., Bengaluru, Pune)"
            className="location-input"
            value={locationTerm}
            onChange={(e) => setLocationTerm(e.target.value)}
          />
          <button className="find-jobs-btn">Find Jobs</button>
        </div>
      </div>
      
      {/* 2. Available Jobs Section (Top distance reduced via CSS) */}
      <div className="section-block job-openings-section"> {/* Added a unique class for specific spacing */}
        <h2 className="section-title">Latest Job Openings</h2>
        
        {/* Additional Filters */}
        <div className="additional-filters">
            <select 
                className="filter-dropdown" 
                value={activeJobTypeFilter} 
                onChange={(e) => setActiveJobTypeFilter(e.target.value)}
            >
                {jobTypeOptions.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
            <select 
                className="filter-dropdown" 
                value={activeCategoryFilter} 
                onChange={(e) => setActiveCategoryFilter(e.target.value)}
            >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
        </div>

        <div className="jobs-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div className="company-logo-placeholder">Hb</div> 
                  <span className={`job-type job-type-${job.type.split(' ')[0].toLowerCase()}`}>{job.type}</span>
                </div>
                
                <h3 className="job-card-title">{job.title}</h3>
                <p className="job-card-company">{job.company}</p>

                <div className="job-card-meta">
                  <p className="job-card-location">📍 {job.location}</p>
                  <p className="job-card-salary">💰 **{job.salary}**</p>
                </div>
                
                <p className="job-card-description">{job.description.substring(0, 100)}...</p>

                <button className="apply-btn">View & Apply</button>
              </div>
            ))
          ) : (
            <p className="no-jobs-found">No jobs found matching your criteria. Try adjusting your search or filters!</p>
          )}
        </div>
      </div>

      {/* 3. Hiring Flow (Roadmap Image) - Layout updated via CSS */}
      <div className="section-block hiring-flow-section">
        <div className="roadmap-layout-container"> {/* New container for text + image */}
            <div className="roadmap-text-content">
                <h2 className="section-title white-text">How It Works</h2> 
                <p>Our goal is to make job hunting easy and efficient for you. Follow these simple steps to secure your next opportunity:</p>
                <ul>
                    <li>**Search:** Use filters to find jobs matching your skill and location.</li>
                    <li>**Apply:** Submit your basic details and required documents.</li>
                    <li>**Verify:** Our team verifies your profile and shortlists you.</li>
                    <li>**Interview:** We schedule your interview with the employer.</li>
                    <li>**Get Hired!** Start your new job immediately.</li>
                </ul>
                <button className="find-jobs-btn" style={{marginTop: '20px'}}>Start Your Journey Now</button>
            </div>
            
            <div className="roadmap-image-container">
                <img src={ShramSaathiRoadmap} alt="Shram Saathi User Journey Roadmap" className="shram-saathi-roadmap-img" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;