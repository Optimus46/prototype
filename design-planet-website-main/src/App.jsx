import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HeroSection from "./components/HeroSection";
import ProductsGrid from "./components/ProductsGrid";
import FooterSection from "./components/FooterSection";
import TestimonialGrid from "./components/TestimonialGrid";
import Navbar from "./components/Navbar";
import Topbar from "./components/topbar";
import AboutPage from "./components/AboutPage"; // <-- Create this component

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsGrid />
      <TestimonialGrid />
      <FooterSection />
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
