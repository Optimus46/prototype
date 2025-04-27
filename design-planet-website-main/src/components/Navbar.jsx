import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-[rgb(15,30,68)] via-[#27448D] to-[#3F4088] text-white shadow-md fixed top-0 left-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-14 md:px-18 py-4">
        {/* Logo */}
        <div className="text-2xl sm:text-2xl md:text-2xl font-extrabold leading-snug md:leading-[1.1] text-wrap">
          Design Planet
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
          <a href="#products" className="hover:text-blue-400 transition-colors duration-300">Products</a>
          <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          {/* You can add a hamburger menu here later if needed */}
          <button className="text-3xl">&#9776;</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
