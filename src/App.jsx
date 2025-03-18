import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Project from "./Project/Project";
import About from "./About/About";
import Contact from "./Contact/Contact";
import {HelmetProvider } from 'react-helmet-async';
export default function App() {
  return (
    <HelmetProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </HelmetProvider>
  );
}
