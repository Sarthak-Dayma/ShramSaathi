import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import JobPage from "./pages/JobPage"; // ✅ file name should match exactly
import HireBluePage from "./pages/HireBluePage";
import BlogsPage from "./pages/BlogsPage";

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
        <Route path="/blog" element={<BlogsPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;


