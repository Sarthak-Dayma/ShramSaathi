// src/pages/BlogsPage.js

import React from "react";
import { Link } from 'react-router-dom';
import "./JobPage.css"; // Reusing the existing CSS file

// Mock data for blog posts (Ensure each post has a unique id)
const blogPosts = [
  {
    id: 1,
    title: 'The Dignity of Labor: Why Every Job Matters',
    excerpt: 'In a world that often glorifies white-collar professions, it’s crucial to remember and celebrate the dignity of labor...',
    content: 'Full content for post 1 goes here. In a world that often glorifies white-collar professions, it’s crucial to remember and celebrate the dignity of labor. Every job, from construction to cleaning, forms the backbone of our society. ShramSaathi is built on this principle, aiming to connect hardworking individuals with opportunities that respect their skills and contributions. This post delves into the importance of recognizing and valuing blue-collar work.',
    author: 'Admin',
    date: 'October 26, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
  },
  {
    id: 2,
    title: 'Navigating the Job Market: Tips for Blue-Collar Workers',
    excerpt: 'Finding the right job can be challenging. In this post, we share practical tips for blue-collar workers to enhance their job search...',
    content: 'Full content for post 2 goes here. Finding the right job can be challenging. In this post, we share practical tips for blue-collar workers to enhance their job search, from creating a simple yet effective resume to preparing for interviews. We also cover how to leverage platforms like ShramSaathi to find verified and suitable job openings in your vicinity.',
    author: 'Jane Doe',
    date: 'October 22, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    title: 'Safety First: Ensuring a Secure Work Environment',
    excerpt: 'Workplace safety is non-negotiable. Employers have a responsibility to provide a safe environment, and workers need to be aware of their rights...',
    content: 'Full content for post 3 goes here. Workplace safety is non-negotiable. Employers have a responsibility to provide a safe environment, and workers need to be aware of their rights. This article discusses common safety standards, the importance of protective gear, and the steps workers can take if they feel their workplace is unsafe. At ShramSaathi, we encourage employers who prioritize the well-being of their staff.',
    author: 'John Smith',
    date: 'October 18, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1549924231-f969915a7ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];


const BlogsPage = () => {
  return (
    <div className="blogs-page">
      <header className="blogs-header">
        <h1>Our Blog</h1>
        <p>Insights, stories, and updates from the ShramSaathi team.</p>
      </header>
      <main className="blogs-grid">
        {blogPosts.map(post => (
          <div className="blog-card" key={post.id}>
            <img src={post.imageUrl} alt={post.title} className="blog-card-image" />
            <div className="blog-card-content">
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-meta">By {post.author} on {post.date}</p>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              {/* --- MODIFICATION HERE --- */}
              <Link to={`/blog/${post.id}`} className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default BlogsPage;