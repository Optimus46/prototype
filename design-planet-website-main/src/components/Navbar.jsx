import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollLink = (id) => {
    // If you're not on the homepage, navigate there first
    if (location.pathname !== "/home") {
      navigate("/home");

      // Wait a bit for the homepage to load, then scroll
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100); // You can adjust the delay if needed
    } else {
      // Already on home page: just scroll
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }

    // Close the mobile menu if it's open
    if (isMenuOpen) toggleMenu();
  };
  const handleHomeScroll=(id)=>{
    if (location.pathname == "/home") {
     
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" })}
    else{
      navigate("/home");
    }    
  }

  return (
    <nav className="w-full bg-gradient-to-r from-[rgb(15,30,68)] via-[#27448D] to-[#3F4088] text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-14 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold leading-snug md:leading-[1.1] text-wrap">
          Design Planet
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <button onClick ={()=>handleHomeScroll("home")} className="hover:text-blue-400 transition-colors duration-300">Home</button>
          <button onClick={() => handleScrollLink("products")} className="hover:text-blue-400 transition-colors duration-300">Products</button>
          <Link to="/about" className="hover:text-blue-400 transition-colors duration-300">About</Link>
          <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
        </div>

        {/* Mobile Hamburger / Cross */}
        <div className="md:hidden">
          <button
            className="text-3xl text-white focus:outline-none transition-transform duration-300 transform hover:scale-110"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <IoCloseCircleOutline/> : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[rgb(15,30,68)] via-[#27448D] to-[#3F4088] px-6 pb-4 flex flex-col space-y-4 text-lg font-medium">
          <Link to="/home" className="hover:text-blue-400" onClick={toggleMenu}>Home</Link>
          <a href="#products" className="hover:text-blue-400" onClick={toggleMenu}>Products</a>
          <Link to="/about" className="hover:text-blue-400" onClick={toggleMenu}>About</Link>
          <a href="#contact" className="hover:text-blue-400" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
