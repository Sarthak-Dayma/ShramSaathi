// src/pages/JobPage.js
import React, { useState, useEffect } from 'react';
// --- IMPORT LINK ---
import { Link } from 'react-router-dom';
import './JobPage.css';

// --- MOCK DATA REMOVED ---

const JobPage = () => {
  // --- STATE FOR JOBS, FILTERS, AND LOADING ---
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    location: 'all',
    jobType: 'all',
  });

  // --- USEEFFECT FOR DATA FETCHING ---
  useEffect(() => {
    // This function simulates fetching data from your future Django API
    const fetchJobs = async () => {
      setLoading(true);
      
      // --- Placeholder API endpoint ---
      // When your backend is ready, replace this with:
      // const response = await fetch(`/api/jobs?search=${searchTerm}&category=${filters.category}...`);
      // const data = await response.json();
      
      // --- Simulating API call with mock data ---
      const mockApiData = [
        { id: 1, title: 'Construction Worker', company: 'BuildRight Ltd.', location: 'Pune', category: 'construction', jobType: 'full-time', salary: '₹15,000/month', description: 'Seeking hardworking construction workers for a new project.' },
        { id: 2, title: 'Factory Packer', company: 'PackFast Inc.', location: 'Mumbai', category: 'factory', jobType: 'part-time', salary: '₹10,000/month', description: 'Urgent requirement for packers in a warehouse.' },
        { id: 3, title: 'Delivery Driver', company: 'QuickDrop Logistics', location: 'Pune', category: 'delivery', jobType: 'full-time', salary: '₹18,000/month', description: 'Driver needed with a valid 2-wheeler license.' },
        { id: 4, title: 'Hotel Housekeeping', company: 'Grand Hotel', location: 'Delhi', category: 'hospitality', jobType: 'full-time', salary: '₹12,000/month', description: 'Experienced housekeeping staff required.' },
      ];
      
      // Simulate network delay
      setTimeout(() => {
        setJobs(mockApiData);
        setLoading(false);
      }, 1000);
    };

    fetchJobs();
  }, [searchTerm, filters]); // Re-fetch when search or filters change

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // --- Filtering logic now applies to 'jobs' state ---
  // In a real app, your API would handle this filtering
  const filteredJobs = jobs.filter(job => {
    return (
      (filters.category === 'all' || job.category === filters.category) &&
      (filters.location === 'all' || job.location === filters.location) &&
      (filters.jobType === 'all' || job.jobType === filters.jobType) &&
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       job.company.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="job-page">
      <header className="job-hero">
        <h1>Find Your Job</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by title, company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => {}}>Search</button>
        </div>
      </header>
      
      <main className="job-content">
        <aside className="filters">
          <h3>Filters</h3>
          <div className="filter-group">
            <label htmlFor="category">Category</label>
            <select name="category" id="category" value={filters.category} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="construction">Construction</option>
              <option value="factory">Factory</option>
              <option value="delivery">Delivery</option>
              <option value="hospitality">Hospitality</option>
              {/* Add more categories */}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="location">Location</label>
            <select name="location" id="location" value={filters.location} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              {/* Add more locations */}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="jobType">Job Type</label>
            <select name="jobType" id="jobType" value={filters.jobType} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
            </select>
          </div>
        </aside>
        
        <section className="job-listings">
          {loading ? (
            <p>Loading jobs...</p>
          ) : (
            filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div className="job-card" key={job.id}>
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                  <p className="location">{job.location}</p>
                  <p className="salary">{job.salary}</p>
                  <p className="description">{job.description.substring(0, 100)}...</p>
                  {/* --- UPDATE BUTTON TO LINK --- */}
                  <Link to={`/jobs/${job.id}`} className="apply-btn">
                    View & Apply
                  </Link>
                </div>
              ))
            ) : (
              <p>No jobs found matching your criteria.</p>
            )
          )}
        </section>
      </main>
    </div>
  );
};

export default JobPage;