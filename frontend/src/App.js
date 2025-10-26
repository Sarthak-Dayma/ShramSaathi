// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import JobPage from "./pages/JobPage";
import HireBluePage from "./pages/HireBluePage";
import BlogsPage from "./pages/BlogsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
// --- IMPORT THE NEW COMPONENT ---
import BlogPostDetail from "./pages/BlogPostDetail";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/hire" element={<HireBluePage />} />
        {/* The main blog page route */}
        <Route path="/blog" element={<BlogsPage />} />
        {/* --- ADD THE DYNAMIC ROUTE FOR SINGLE POSTS --- */}
        <Route path="/blog/:postId" element={<BlogPostDetail />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;