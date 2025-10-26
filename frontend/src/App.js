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
import PrivacyPolicy from "./pages/PrivacyPolicy"; // <-- Import Privacy Policy
import ContactUs from "./pages/ContactUs";         // <-- Import Contact Us

function App() {
  return (
    <Router>
      <Header />
      <Navbar /> {/* Ensure Navbar includes links to /privacy and /contact */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/hire" element={<HireBluePage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} /> {/* <-- Add Privacy Policy route */}
        <Route path="/contact" element={<ContactUs />} />     {/* <-- Add Contact Us route */}
      </Routes>
      {/* Consider adding a Footer component here later */}
    </Router>
  );
}

export default App;