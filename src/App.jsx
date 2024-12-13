import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./indonesiaProject/Navbar";
import Footer from "./indonesiaProject/Footer"; 
import Home from "./indonesiaProject/Home";
import About from "./indonesiaProject/About";
import Initiatives from "./indonesiaProject/Initiatives";
import Contact from "./indonesiaProject/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;