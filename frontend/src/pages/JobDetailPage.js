// src/pages/JobDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './JobDetailPage.css'; // We'll create this next

// --- Mock Data (same as in JobPage) ---
// In a real app, you'd fetch only the specific job by ID
const mockApiData = [
    { id: 1, title: 'Construction Worker', company: 'BuildRight Ltd.', location: 'Pune', category: 'construction', jobType: 'full-time', salary: '₹15,000/month', description: 'Seeking hardworking construction workers for a new project. Must be physically fit and have prior experience in masonry or concrete work. Safety gear will be provided.' },
    { id: 2, title: 'Factory Packer', company: 'PackFast Inc.', location: 'Mumbai', category: 'factory', jobType: 'part-time', salary: '₹10,000/month', description: 'Urgent requirement for packers in a warehouse. Shift timings are flexible. Role involves sorting, packing, and labeling goods for dispatch.' },
    { id: 3, title: 'Delivery Driver', company: 'QuickDrop Logistics', location: 'Pune', category: 'delivery', jobType: 'full-time', salary: '₹18,000/month', description: 'Driver needed with a valid 2-wheeler license and a smartphone. Must be familiar with Pune city routes. Incentives based on performance.' },
    { id: 4, title: 'Hotel Housekeeping', company: 'Grand Hotel', location: 'Delhi', category: 'hospitality', jobType: 'full-time', salary: '₹12,000/month', description: 'Experienced housekeeping staff required for a 5-star hotel. Responsibilities include cleaning rooms, changing linens, and maintaining hygiene standards.' },
];

const JobDetailPage = () => {
  const { jobId } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching the specific job details
    // In future: fetch(`/api/jobs/${jobId}`)
    const foundJob = mockApiData.find(j => j.id === parseInt(jobId));
    
    setTimeout(() => {
      setJob(foundJob);
      setLoading(false);
    }, 500); // Simulate network delay
  }, [jobId]);

  if (loading) {
    return <div className="job-detail-container"><p>Loading job details...</p></div>;
  }

  if (!job) {
    return (
      <div className="job-detail-container">
        <h2>Job not found</h2>
        <Link to="/jobs">Back to all jobs</Link>
      </div>
    );
  }

  return (
    <div className="job-detail-page">
      <header className="job-detail-header">
        <h1>{job.title}</h1>
        <p className="company-name">{job.company}</p>
      </header>
      
      <div className="job-detail-container">
        <div className="job-main-content">
          <h2>Job Description</h2>
          <p>{job.description}</p>
          
          <h2>Responsibilities</h2>
          <ul>
            <li>(Responsibility 1... to be added from backend)</li>
            <li>(Responsibility 2... to be added from backend)</li>
            <li>(Responsibility 3... to be added from backend)</li>
          </ul>

          <h2>Requirements</h2>
          <ul>
            <li>(Requirement 1... to be added from backend)</li>
            <li>(Requirement 2... to be added from backend)</li>
          </ul>
        </div>
        
        <aside className="job-sidebar">
          <div className="summary-card">
            <h3>Job Summary</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Job Type:</strong> {job.jobType}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Category:</strong> {job.category}</p>
          </div>
          <button className="apply-now-btn">Apply Now</button>
        </aside>
      </div>
    </div>
  );
};

export default JobDetailPage;