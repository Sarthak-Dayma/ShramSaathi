// src/pages/BlogPostDetail.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPostDetail.css'; // We'll create this file next

// We use the same mock data here. In the future, this data will be fetched from the backend.
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

const BlogPostDetail = () => {
  const { postId } = useParams(); // Get the postId from the URL
  const post = blogPosts.find(p => p.id === parseInt(postId)); // Find the post in our mock data

  // Handle case where post is not found
  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h2>Post not found</h2>
        <p>We couldn't find the blog post you were looking for.</p>
        <Link to="/blog">Back to all posts</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-detail-page">
      <header className="blog-post-header" style={{ backgroundImage: `url(${post.imageUrl})` }}>
        <div className="overlay"></div>
        <div className="header-content">
            <h1>{post.title}</h1>
            <p className="post-meta">By {post.author} on {post.date}</p>
        </div>
      </header>
      <main className="blog-post-content-container">
        <div className="blog-post-content">
          {/* Using dangerouslySetInnerHTML is okay for trusted content, 
              but when fetching from a DB, you'd sanitize this.
              For simple text, <p>{post.content}</p> is safer. */}
          <p>{post.content}</p>
        </div>
        <Link to="/blog" className="back-to-blog-btn">
          &larr; Back to All Posts
        </Link>
      </main>
    </div>
  );
};

export default BlogPostDetail;