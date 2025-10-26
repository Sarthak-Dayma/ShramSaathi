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
import BlogPostDetail from "./pages/BlogPostDetail";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Profile from "./pages/Profile";
// --- IMPORT NEW JOB DETAIL PAGE ---
import JobDetailPage from "./pages/JobDetailPage"; 

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* --- UPDATE JOB ROUTES --- */}
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/jobs/:jobId" element={<JobDetailPage />} /> 
        <Route path="/hire" element={<HireBluePage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/blog/:postId" element={<BlogPostDetail />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;