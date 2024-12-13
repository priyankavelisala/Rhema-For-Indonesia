import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" top-0 fixed bg-white text-center shadow-lg p-3 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center space-x-4">
            <img
              className="w-20 ml-20"
              src="https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Abstract-Logo-Graphics-1-136-580x386.jpg"
              alt="Logo"
            />
            <Link to="/" className="text-black font-bold text-xl">
              Rhema For Indonesia
            </Link>
          </div>

       
          <div className="hidden font-bold md:flex mr-20 space-x-8">
            <Link
              to="/"
              className="text-black hover:text-blue-400 hover:underline"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-blue-400 hover:underline"
            >
              About
            </Link>
            <Link
              to="/initiatives"
              className="text-black hover:text-blue-400 hover:underline"
            >
              Initiative
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-blue-400 hover:underline"
            >
              Contact
            </Link>
          </div>

         
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-white text-bold text-center mt-2 shadow-lg">
          <Link
            to="/"
            className="block px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/initiatives"
            className="block px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Initiative
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-black hover:bg-blue-600 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;