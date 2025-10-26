// src/pages/BlogsPage.js

import React from "react";
import "./JobPage.css"; // Reusing the existing CSS file

const mockBlogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Plumber Certification in India",
    author: "Shram Saathi Team",
    date: "Oct 15, 2025",
    category: "Skilled Trades",
    summary: "Learn about the necessary certifications, training institutes, and career path for becoming a certified plumber in major Indian cities.",
    image: "https://m.media-amazon.com/images/I/81p0yPV3mSL._SL1500_.jpg",
  },
  {
    id: 2,
    title: "How to Negotiate Your Salary as a Delivery Driver",
    author: "Career Coach Priya",
    date: "Sep 28, 2025",
    category: "Driving/Logistics",
    summary: "Tips and scripts to help you get the best compensation, including variable pay and benefits, from logistics companies like QuickMove.",
    image: "https://via.placeholder.com/400x200/ff9800/ffffff?text=Salary+Negotiation",
  },
  {
    id: 3,
    title: "5 Essential Skills for Housekeeping Staff in Apartment Complexes",
    author: "CleanSweep Manager",
    date: "Sep 10, 2025",
    category: "Housekeeping",
    summary: "Master the fundamental soft and hard skills that top-tier residential and commercial housekeeping firms are looking for right now.",
    image: "https://via.placeholder.com/400x200/4caf50/ffffff?text=Housekeeping+Skills",
  },
  {
    id: 4,
    title: "Safety First: A Guide for Construction Site Shramiks",
    author: "Pinnacle Safety Lead",
    date: "Aug 20, 2025",
    category: "Manual Labor",
    summary: "Crucial safety protocols, gear requirements, and legal rights every construction site worker should know before starting a project.",
    image: "https://via.placeholder.com/400x200/f44336/ffffff?text=Safety+Guide",
  },
  {
    id: 5,
    title: "Electrician vs. Mechanic: Choosing Your Skilled Trade Path",
    author: "Trade Expert Vivek",
    date: "Jul 05, 2025",
    category: "Skilled Trades",
    summary: "A comparison of required training, typical salaries, and long-term career growth between automotive mechanics and certified electricians.",
    image: "https://via.placeholder.com/400x200/1e40af/ffffff?text=Trade+Comparison",
  },
];

const BlogsPage = () => {
  return (
    <div className="jobs-page">
      
      {/* Blog Hero Section */}
      <div className="blog-hero-container">
        <div className="blog-hero-content">
          <h1 className="blog-title">Resources & Career Advice 📰</h1>
          <p className="blog-subtitle">Empowering the workforce with essential knowledge and industry insights.</p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="section-block blog-post-section">
        <h2 className="section-title">Latest Articles</h2>
        
        <div className="blog-grid">
          {mockBlogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-card-image" />
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className={`blog-category blog-category-${post.category.split('/')[0].toLowerCase().replace(/\s/g, '-')}`}>{post.category}</span>
                  <span className="blog-date">📅 {post.date}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-summary">{post.summary}</p>
                <div className="blog-card-footer">
                    <span className="blog-author">By: {post.author}</span>
                    <a href="#" className="read-more-btn">Read More →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;