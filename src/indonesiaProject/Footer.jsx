import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-80 bg-black flex flex-col md:flex-row items-center mt-10 justify-between">
     
      <div className="w-60 mt-8 md:mt-10 m-auto">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIUPEI_MneYsfWkGrpPNgvby-fsholjcf1CyzMpiQ1tTI41rckckY3yoA0P1ei82IoAA&usqp=CAU"
          alt="Placeholder"
          className="rounded rounded-lg"
        />
      </div>

      <div className="md:w-1/3 text-center md:text-left mb-6">
        <ul className="text-white">
          <li className="font-bold mb-3">Company</li>
          <li className="mb-3">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/initiatives" className="hover:underline">
              Initiatives
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;